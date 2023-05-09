import { GameOfLifeBuilder } from '../src/Builders/GameOfLifeBuilder';
import { ClassicGameOfLife } from '../src/Implementations/ClassicGameOfLife';

describe('BasicInitGameOfLifeTests', () => {
  test('TestSetAndGetCell', () => {
    const game = new ClassicGameOfLife(3, 3);

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert
    expect(game.GetCell(1, 1)).toBe(true);
  });

  test('TestSetAndGetCellVariation', () => {
      //game.setInitialGeneration(new boolean[3][3]);
    const game = new ClassicGameOfLife(3, 3);

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert
    expect(game.GetCell(1, 1)).toBe(true);
  });

  test('TestNextGeneration', () => {
    const game = new ClassicGameOfLife(3, 3);

    // Set the value of the cell x = 1, y = 1 is true
    game.SetCell(1, 1, true);

    // Assert the setter of the cell
    expect(game.GetCell(1, 1)).toBe(true);

    // In theory the cell dies in next gen
    game.NextGeneration();

    // Assert
    expect(game.GetCell(1, 1)).toBe(false);
  });

  test('TestStableSquare', () => {
    // Create a 4 x 4 game
    const game = new ClassicGameOfLife(4, 4);
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
