import { IBoard } from "../Interfaces/IBoard";
import { IGameRules } from "../Interfaces/IGameRules";
import { CreateBooleanArray } from "../Utils/CreateBooleanArray";

export abstract class GameOfLifeBase implements IBoard {
  // These are properties of the abstract class `Game`.
  public Width: number;
  public Height: number;
  public Board: boolean[][];
  public GameRules: IGameRules;

  // `public Game(){}` is a default constructor for the abstract class `Game`.
  // It does not take any parameters and does not have any implementation.
  // It is used to create an instance of the class with default values for its properties.
  constructor() {}

  /**
   * This function sets the initial state of a board with a given size and throws an exception if
   * the size is not the same as the board size.
   * @param board a two-dimensional boolean array representing the initial state of a board game.
   */
  public SetInitialGeneration(board: boolean[][]): void {
    if (board.length !== this.Width || board[0].length !== this.Height) {
      throw new Error("The board size is not the same as the board size.");
    }
    this.Board = board;
  }

  /**
   * This function sets the value of a cell in a board at a given position.
   * @param x The x-coordinate of the cell to be set in the board.
   * @param y The y parameter represents the vertical position of the cell in the board.
   * It is used to access the correct row in the two-dimensional array that represents the
   * board.
   * @param value A boolean value that represents the value to be set in the cell at
   * position (x, y) on the board. If value is true, the cell will be marked as "alive", and if
   * value is false, the cell will be marked as "dead".
   */
  public SetCell(x: number, y: number, value: boolean): void {
    this.CheckBoardExists();
    this.CheckCellInBoard(x, y);
    this.Board[x][y] = value;
  }

  /**
   * This function returns the boolean value of a cell in a board at a given position.
   * @param x The x-coordinate of the cell in the board.
   * @param y The y parameter represents the vertical position of the cell in the board.
   * It is usually an integer value that ranges from 0 to the height of the board minus
   * 1.
   * @returns A boolean value representing the state of the cell at position (x, y) on the board.
   */
  public GetCell(x: number, y: number): boolean {
    this.CheckBoardExists();
    this.CheckCellInBoard(x, y);
    return this.Board[x][y];
  }

  public SetWidth(width: number): void {
    this.Width = width;
  }
  /**
   * This function returns the value of the "Width" property of an object.
   */
  public GetWidth(): number {
    if(this.Width == null) throw new Error("Width is null");
    return this.Width;
  }

  public SetHeight(height: number): void {
    this.Height = height;
  }
  /**
   * This function returns the value of the "Height" property of an object.
   */
  public GetHeight(): number {
    if(this.Height == null) throw new Error("Height is null");
    return this.Height;
  }

  /**
   * This function returns the current state of the board as a boolean 2D array.
   */
  public GetCurrentBoard(): boolean[][] {
    return this.Board;
  }

  /**
   * This is an abstract method in TypeScript that is used to generate the next generation.
   */
  public abstract NextGeneration(): void;


/**
 * This function counts the number of neighboring cells that are alive in a game of life board.
 * @param {number} x - The x-coordinate of the cell for which we want to count the wrapped neighbors.
 * @param {number} y - The y parameter represents the vertical position of a cell on a game board.
 * @returns the count of neighboring cells that are alive (i.e., have a value of true) for a given cell
 * at position (x, y) on a board.
 */
  protected CountWrapNeighbors(x: number, y: number): number {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) 
                {
                    continue;
                }
                let neighborX = x + i;
                let neighborY = y + j;
                if (neighborX < 0) 
                {
                    neighborX = this.Width - 1;
                } 
                else if (neighborX >= this.Width) 
                {
                    neighborX = 0;
                }
                if (neighborY < 0) 
                {
                    neighborY = this.Height - 1;
                } 
                else if (neighborY >= this.Height) {
                    neighborY = 0;
                }
                if (this.Board[neighborX][neighborY]) 
                {
                    count++;
                }
            }
        }
        return count;
    }

    /// <summary>
    /// This function checks if the board property of the object exists and throws an exception if
    /// it does not exist.
    /// </summary>
    private CheckBoardExists()
    {
        if(this.Board == null) throw new Error("The board does not exist.");
    }

    /// <summary>
    /// This function checks if the cell at the given position is within the board boundaries and
    /// throws an exception if it is not.
    /// </summary>
    /// <param name="x">The x-coordinate of the cell to be checked.</param>
    /// <param name="y">The y-coordinate of the cell to be checked.</param>
    private CheckCellInBoard(x :number, y :number)
    {
        if(x < 0 || y < 0 || x >= this.Width || y >= this.Height) throw new Error("The cell is outside the bounds of the board.");
    }

    public SetRules(rules: IGameRules): void {
        this.GameRules = rules;
    }

    /**
     * This function returns the game rules.
     * @returns The method `GetRules()` is returning an object of type `IGameRules`. The specific
     * object being returned is the one stored in the `GameRules` property of the current object.
     */
    GetRules(): IGameRules {
        return this.GameRules;
    }

    /**
     * The function initializes the board and checks for errors.
     */
    public Init(): void 
    {
        if (this.GetHeight() === 0) throw new Error("Height cannot be null or zero.");
        if (this.GetWidth() === 0) throw new Error("Width cannot be null or zero.");
        if (this.GetRules() === null) throw new Error("The rules of the board aren't initialized.");
        
        if (this.Board === null)  this.SetInitialGeneration(CreateBooleanArray(this.GetWidth(), this.GetHeight()));
        this.CheckBoardExists();
    }

}
