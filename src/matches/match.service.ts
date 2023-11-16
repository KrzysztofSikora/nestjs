import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Match } from './match.model';
import { Team } from '../teams/team.model';
import { MatchTeam } from '../match-team/match-team.model';
import { Player } from '../players/player.model';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match)
    private readonly matchModel: typeof Match,
    @InjectModel(Match)
    private readonly matchTeamModel: typeof MatchTeam,
    @InjectModel(Team)
    private readonly teamModel: typeof Team,
    @InjectModel(Player)
    private readonly playerModel: typeof Player,
    private sequelize: Sequelize,
  ) {}

  async findAll(): Promise<MatchTeam[]> {
    return this.matchTeamModel.findAll({
      include: [{ model: Team }],
    });
  }

  async getTeamsWithPlayers(matchId: number) {
    const match = await this.matchModel.findByPk(matchId, {
      include: [
        {
          model: Team,
          include: [{ model: Player }],
        },
      ],
    });
    if (!match) {
      throw new Error(`Match  with  id ${matchId} not found`);
    }

    return match;
  }

  /*
        
           * @todo refactor this method for better typo
           */
  async getMatchesForPlayer(id: number) {
    const query = `
      SELECT Matches.id AS matchId, Matches.place, Matches.date, 
             Players.id AS playerId, Players.firstName, Players.lastName, 
             Teams.id AS teamId, Teams.name AS teamName
      FROM Players
      INNER JOIN Teams ON Players.teamId = Teams.id
      INNER JOIN MatchTeams ON Teams.id = MatchTeams.teamId
      INNER JOIN Matches ON MatchTeams.matchId = Matches.id
      WHERE Players.id = :id
    `;

    const playerMatches = await this.sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { id },
    });
    return playerMatches;
  }
}
