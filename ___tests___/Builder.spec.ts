import { GameOfLifeBuilder } from '../src/Builders/GameOfLifeBuilder';
import { ClassicRules } from '../src/Implementations/ClassicRules';
import { ClassicGameOfLife } from '../src/Implementations/ClassicGameOfLife';

describe('GameOfLifeBuilder', () => {
  describe('setAsClassicGameOfLife', () => {
    it('should set Game to a new instance of ClassicGameOfLife', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(10, 10);
      expect(builder['Game'] instanceof ClassicGameOfLife).toBe(true);
    });
  });

  describe('setWidth', () => {
    it('should set the width of the game', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(20, 20);
      expect(builder['Game'].Width).toBe(20);
    });
  });

  describe('setHeight', () => {
    it('should set the height of the game', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(20, 20);
      expect(builder['Game'].Height).toBe(20);
    });
  });

  describe('setInitialGeneration', () => {
    it('should set the initial generation of the game', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(3, 3);
      const initialGeneration = [        [true, false, true],
        [false, true, false],
        [true, false, true],
      ];
      builder.withInitialGeneration(initialGeneration);
      expect(builder['Game'].Board).toEqual(initialGeneration);
    });
  });

  describe('setRules', () => {
    it('should set the rules of the game', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(10, 10);
      const rules = new ClassicRules();
      builder.withRules(rules);
      expect(builder['Game'].GameRules).toBe(rules);
    });
  });

  describe('build', () => {
    it('should initialize and return the game', () => {
      const builder = new GameOfLifeBuilder();
      builder.setAsClassicGameOfLife(10, 10);
      const game = builder.build();
      expect(game).toBeDefined();
      expect(game.Width).toBe(10);
      expect(game.Height).toBe(10);
      expect(game.GameRules instanceof ClassicRules).toBe(true);
    });
  });
});
