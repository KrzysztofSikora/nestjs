import { Player } from '../players/player.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from '../teams/team.model';
import { MatchTeam } from '../match-team/match-team.model';
import { Match } from '../matches/match.model';

export const databaseProviders = [
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: '0.0.0.0',
    port: 3306,
    username: 'root',
    password: 'my-secret-pw',
    database: 'nest',
    autoLoadModels: true,
    synchronize: true,
  }),

  SequelizeModule.forFeature([Player, Team, Match, MatchTeam]),
];
