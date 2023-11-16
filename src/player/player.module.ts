import { Module } from '@nestjs/common';
import { PlayerResolver } from './player.resolver';
import { PlayersService } from './player.service';
import { databaseProviders } from '../providers/database.providers';

@Module({
  imports: [...databaseProviders],
  controllers: [],
  providers: [PlayersService, PlayerResolver],
})
export class PlayerModule {}
