import { GameOfLifeBase } from '../Abstractions/GameOfLifeBase';
import { ClassicGameOfLife } from '../Implementations/ClassicGameOfLife';
import { IGameRules } from '../Interfaces/IGameRules';

export class GameOfLifeBuilder {
  private Game: GameOfLifeBase;

  constructor() { }

  // public withWidth(width: number): GameOfLifeBuilder {
    //   this.Game.SetWidth(width);
    //   return this;
    // }
    
    // public withHeight(height: number): GameOfLifeBuilder {
      //   this.Game.SetHeight(height);
      //   return this;
      // }
      
      // public withDimensions(width: number, height: number): GameOfLifeBuilder {
      //   this.Game.SetWidth(width);
      //   this.Game.SetHeight(height);
      //   return this;
      // }

  /**
   * This function sets the initial generation of a Game of Life instance.
   * @param {boolean[][]} initialGeneration - A two-dimensional boolean array representing the initial
   * state of the cells in the Game of Life. Each element in the array represents a cell, and its value
   * indicates whether the cell is alive (true) or dead (false). The dimensions of the array determine
   * the size of the game board.
   * @returns The method `withInitialGeneration` returns an instance of `GameOfLifeBuilder`.
   */
  public withInitialGeneration(initialGeneration: boolean[][]): GameOfLifeBuilder {
    this.Game.SetInitialGeneration(initialGeneration);
    return this;
  }

  /**
   * This function sets the rules for the Game of Life and returns a GameOfLifeBuilder object.
   * @param {IGameRules} rules - IGameRules, which is likely an interface or class defining the rules
   * for a game of life simulation. This method sets the rules for the game being built by the
   * GameOfLifeBuilder object and returns the builder object for method chaining.
   * @returns The method `withRules` returns a `GameOfLifeBuilder` object.
   */
  public withRules(rules: IGameRules): GameOfLifeBuilder {
    this.Game.SetRules(rules);
    return this;
  }

  /**
   * This function sets the game type as Classic Game of Life and returns a GameOfLifeBuilder object.
   * @param {number} width - The width of the game board/grid in the Classic Game of Life.
   * @param {number} height - The height parameter is a number that represents the number of rows in
   * the game grid.
   * @returns The method `setAsClassicGameOfLife` returns an instance of `GameOfLifeBuilder`.
   */
  public setAsClassicGameOfLife(width: number, height: number): GameOfLifeBuilder
  {
    this.Game = new ClassicGameOfLife(width,height);
    return this;
  }

/**
 * The function initializes a Game of Life instance and returns it.
 * @returns The method is returning an instance of the `GameOfLifeBase` class after initializing it
 * with the `Init()` method of the `Game` object.
 */
  public build(): GameOfLifeBase {
    this.Game.Init();
    return this.Game;
  }
}
