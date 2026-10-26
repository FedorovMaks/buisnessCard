import { Injectable, NotFoundException } from '@nestjs/common';
import type { Link, Profile } from '../../database/entities.js';
import { ProfileRepository } from './profile.repository.js';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getOwnerProfile(): Promise<Profile> {
    const profile = await this.profileRepository.findOwner();

    if (!profile) {
      throw new NotFoundException('Profile has not been seeded');
    }

    return profile;
  }

  findLinksByProfileIds(profileIds: readonly string[]): Promise<Link[]> {
    return this.profileRepository.findLinksByProfileIds(profileIds);
  }
}
