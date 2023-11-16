import { Module } from '@nestjs/common';

import { databaseProviders } from '../providers/database.providers';
import { MatchService } from './match.service';
import { MatchResolver } from './match.resolver';

@Module({
  imports: [...databaseProviders],
  controllers: [],
  providers: [MatchService, MatchResolver],
})
export class MatchModule {}
