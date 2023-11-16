import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlayersService } from './player.service';
import { Player } from './player.model';
import { PlayerType } from './player.schema';
import { CreatePlayerInput, UpdatePlayerInput } from './player.dto';

@Resolver((of) => PlayerType)
export class PlayerResolver {
  constructor(private readonly playersService: PlayersService) {}

  /* 2. list of players */
  @Query(() => PlayerType)
  async players(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Query(() => PlayerType)
  async player(@Args('id', { type: () => Int }) id: number): Promise<any> {
    return this.playersService.findOne(id);
  }

  @Mutation(() => PlayerType)
  async createPlayer(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ): Promise<Player> {
    return this.playersService.create(createPlayerInput);
  }

  @Mutation(() => PlayerType)
  async updatePlayer(
    @Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput,
  ) {
    return this.playersService.update(updatePlayerInput.id, updatePlayerInput);
  }

  @Mutation(() => Boolean)
  async removePlayer(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.playersService.remove(id);
    return true;
  }

  /* 5 drużyna konkretnego gracza */
  @Query(() => PlayerType)
  async teamsOfPlayer(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<any> {
    return this.playersService.findTeamByPlayer(id);
  }
}
