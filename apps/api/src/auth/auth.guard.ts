import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export const ROLES_KEY = 'roles';
export type Role = 'USER' | 'CREATOR' | 'ADMIN';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid bearer token.');
    }

    const token = authHeader.slice('Bearer '.length);

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'playvid-secret') as {
        sub: string;
        role: Role;
      };

      request.user = payload;

      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }

      if (!payload.role || !requiredRoles.includes(payload.role)) {
        throw new ForbiddenException('You do not have permission to access this resource.');
      }

      return true;
    } catch {
      throw new UnauthorizedException('Invalid token.');
    }
  }
}
