/* This code is defining an interface called `IBoard` which describes the properties and methods that a
board object should have. It includes properties for the width and height of the board, a 2D array
of boolean values representing the cells on the board, an object representing the game rules, and
various methods for manipulating the board such as setting the width and height, setting and getting
cell values, advancing to the next generation, and initializing the board. It also imports an
interface called `IGameRules` from another file, which is used as the type for the `gameRules`
property. */
import { IGameRules } from './IGameRules';

export interface IBoard {
    Width: number;
    Height: number;
    Board: boolean[][];
    GameRules: IGameRules;
    SetInitialGeneration(board: boolean[][]): void;
    SetCell(x: number, y: number, value: boolean): void;
    GetCell(x: number, y: number): boolean;
    SetWidth(width: number): void;
    GetWidth(): number;
    SetHeight(height: number): void;
    GetHeight(): number;
    NextGeneration(): void;
    GetCurrentBoard(): boolean[][];
    SetRules(rules: IGameRules): void;
    GetRules(): IGameRules;
    Init(): void;
  }
  