import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from './prisma.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { GithubStrategy } from './github.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: 'your_jwt_secret', signOptions: { expiresIn: '1d' } })
  ],
  providers: [AuthService, PrismaService, GoogleStrategy, GithubStrategy],
  controllers: [AuthController],
})
export class AuthModule {} 