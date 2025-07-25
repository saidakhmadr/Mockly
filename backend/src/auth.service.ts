import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(email: string, name: string, password: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) throw new ConflictException('Email already in use');
    const hash = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: { email, name, password: hash },
    });
    return { id: user.id, email: user.email, name: user.name };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return { token, user: { id: user.id, email: user.email, name: user.name } };
  }

  async oauthLogin({ provider, providerId, email, name, avatarUrl }: { provider: string, providerId: string, email: string, name?: string, avatarUrl?: string }) {
    let user = await this.prisma.user.findUnique({ where: { providerId } });
    if (!user) {
      // Try to find by email
      user = await this.prisma.user.findUnique({ where: { email } });
      if (user) {
        // Optionally update providerId if missing
        if (!user.providerId) {
          user = await this.prisma.user.update({
            where: { email },
            data: { providerId, provider, name, avatarUrl },
          });
        }
        // else: user exists, do nothing
      } else {
        // No user with this email, safe to create
        user = await this.prisma.user.create({
          data: {
            email,
            name,
            password: '',
            provider,
            providerId,
            avatarUrl,
          },
        });
      }
    }
    return { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl, provider: user.provider };
  }

  async getMe(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException();
    return { id: user.id, email: user.email, name: user.name };
  }
} 