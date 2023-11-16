import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './team.model';
import { Player } from '../players/player.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team)
    private teamModel: typeof Team,
    @InjectModel(Player)
    private playerModel: typeof Player,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamModel.findAll();
  }

  async findOne(id: number): Promise<Team> {
    return this.teamModel.findByPk(id);
  }

  async findPlayersOfTeam(teamId: number): Promise<Player[]> {
    return this.playerModel.findAll({
      where: { teamId },
    });
  }
}
