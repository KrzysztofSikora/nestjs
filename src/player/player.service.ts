import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Player } from './player.model';
import { CreatePlayerInput, UpdatePlayerInput } from './player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player)
    private playerModel: typeof Player,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playerModel.findAll();
  }

  findOne(id: number): Promise<Player> {
    return this.playerModel.findByPk(id);
  }

  async create(createPlayerInput: CreatePlayerInput): Promise<Player> {
    const player = new Player(createPlayerInput);
    return player.save();
  }

  async update(
    id: number,
    updatePlayerInput: UpdatePlayerInput,
  ): Promise<Player> {
    const [result] = await this.playerModel.update(updatePlayerInput, {
      where: { id },
      returning: false,
    });
    if (!result) {
      throw 'User not found';
    }
    return updatePlayerInput as Player;
  }

  async remove(id: number): Promise<void> {
    const player = await this.playerModel.findByPk(id);
    await player.destroy();
  }
}
