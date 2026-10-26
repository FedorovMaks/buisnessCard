import { Injectable } from '@nestjs/common';
import type { Link, Profile } from '../../database/entities.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findOwner(): Promise<Profile | null> {
    return this.prisma.profile.findFirst();
  }

  findLinksByProfileIds(profileIds: readonly string[]): Promise<Link[]> {
    return this.prisma.link.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
