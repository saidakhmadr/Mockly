import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { AuthService } from './auth.service';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:3000/github/redirect',
      scope: ['user:email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, user?: any) => void,
  ) {
    const { id, displayName, username, emails, photos } = profile as any;
    const email = emails?.[0]?.value || '';
    const user = await this.authService.oauthLogin({
      provider: 'github',
      providerId: id,
      email,
      name: displayName || username,
      avatarUrl: photos?.[0]?.value,
    });
    done(null, user);
  }
} 