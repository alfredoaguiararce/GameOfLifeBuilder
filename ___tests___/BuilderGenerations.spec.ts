import { GameOfLifeBuilder } from '../src/Builders/GameOfLifeBuilder';
import { ClassicGameOfLife } from '../src/Implementations/ClassicGameOfLife';

describe('Builder Tests', () => {
  test('Builder with Initial Generation', () => {
    // Arrange
    const initialBoard: boolean[][] = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ];

    const game = new GameOfLifeBuilder()
      .setAsClassicGameOfLife(3, 3)
      .withInitialGeneration(initialBoard)
      .build();

    expect(game.GetCurrentBoard()).toEqual(initialBoard);
    expect(game.GetCell(1, 1)).toBe(true);
  });

  test('Set and Get Cell', () => {
    const game = new GameOfLifeBuilder()
    .setAsClassicGameOfLife(3, 3)
        .build();

    // Set cell could be a method of the builder
    game.SetCell(1, 1, true);
    expect(game.GetCell(1, 1)).toBe(true);

    game.NextGeneration();
    expect(game.GetCell(1, 1)).toBe(false);
  });
});

describe('Basic Init Game Of Life Tests', () => {
  test('Test Set and Get Cell', () => {
    const game = new GameOfLifeBuilder()
    .setAsClassicGameOfLife(3, 3)
      .build();

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert
    expect(game.GetCell(1, 1)).toBe(true);
  });

  test('Test Set and Get Cell Variation', () => {
    const game = new GameOfLifeBuilder()
    .setAsClassicGameOfLife(3, 3)
    .build();
    //game.setInitialGeneration(new boolean[3][3]);

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert
    expect(game.GetCell(1, 1)).toBe(true);
  });

  test('Test Next Generation', () => {
    const game = new GameOfLifeBuilder()
    .setAsClassicGameOfLife(3, 3)
    .build();

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert the setter of the cell
    expect(game.GetCell(1, 1)).toBe(true);

    // In theory the cell dies in next gen
    game.NextGeneration();

    // Assert
    expect(game.GetCell(1, 1)).toBe(false);
  });

  test('Test Stable Square', () => {
    // Create a 3 x 3 game
    const game = new GameOfLifeBuilder()
    .setAsClassicGameOfLife(4, 4)
    .build();

    game.SetCell(1, 1, true);
    game.SetCell(1, 2, true);
    game.SetCell(2, 1, true);
    game.SetCell(2, 2, true);

    // Calculamos la siguiente generación
    game.NextGeneration();

    // Comprobamos que la configuración es la esperada
    expect(game.GetCell(1, 1)).toBe(true);
    expect(game.GetCell(1, 2)).toBe(true);
    expect(game.GetCell(2, 1)).toBe(true);
    expect(game.GetCell(2, 2)).toBe(true);
    expect(game.GetCell(0, 0)).toBe(false);
  });

});