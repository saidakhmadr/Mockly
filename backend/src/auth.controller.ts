import { Body, Controller, Get, Post, Req, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService, private jwtService: JwtService) {}

  @Post('register')
  async register(@Body() body: { email: string; name: string; password: string }) {
    return this.authService.register(body.email, body.name, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Get('me')
  async me(@Req() req: any) {
    // Expect JWT in Authorization header as Bearer token
    const auth = req.headers['authorization'];
    if (!auth) return { user: null };
    const token = auth.split(' ')[1];
    try {
      const payload = this.jwtService.verify(token, { secret: 'your_jwt_secret' });
      return { user: await this.authService.getMe(payload.sub) };
    } catch {
      return { user: null };
    }
  }

  // Google OAuth
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: any, @Res() res: Response) {
    const user = req.user;
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    res.redirect(`http://localhost:3001/oauth-success?token=${token}`);
  }

  // GitHub OAuth
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @Get('github/redirect')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(@Req() req: any, @Res() res: Response) {
    const user = req.user;
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    res.redirect(`http://localhost:3001/oauth-success?token=${token}`);
  }
} 