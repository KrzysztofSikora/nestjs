import { Module } from '@nestjs/common';
import { TeamResolver } from './team.resolver';
import { TeamService } from './team.service';
import { databaseProviders } from '../providers/database.providers';

@Module({
  imports: [...databaseProviders],
  providers: [TeamResolver, TeamService],
  exports: [TeamService],
})
export class TeamModule {}
