import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team)
    private teamModel: typeof Team,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamModel.findAll();
  }

  async findOne(id: number): Promise<Team> {
    return this.teamModel.findByPk(id);
  }
}
