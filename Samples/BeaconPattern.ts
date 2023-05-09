import { CreateBooleanArray, GameOfLifeBase, GameOfLifeBuilder } from "../dist/index";

const beaconPattern = CreateBooleanArray(6, 6);

// Set the initial configuration of the beacon pattern
beaconPattern[0][0] = true;
beaconPattern[0][1] = true;
beaconPattern[1][0] = true;
beaconPattern[2][3] = true;
beaconPattern[3][2] = true;
beaconPattern[3][3] = true;

let Game: GameOfLifeBase = new GameOfLifeBuilder()
  .setAsClassicGameOfLife(6, 6)
  .withInitialGeneration(beaconPattern)
  .build();

// Print the pattern to the console
function printBoard(Game: GameOfLifeBase) {
  const trueChar = "X";
  const falseChar = "-";
  const printableArray = Game.GetCurrentBoard().map(row => row.map(cell => cell ? trueChar : falseChar));
  console.table(printableArray);
  Game.NextGeneration();
}

printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
printBoard(Game);
