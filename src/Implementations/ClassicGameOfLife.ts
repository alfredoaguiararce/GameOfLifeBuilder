import { GameOfLifeBase } from "../Abstractions/GameOfLifeBase";
import { ClassicRules } from "../Implementations/ClassicRules";
import { CreateBooleanArray } from "../Utils/CreateBooleanArray";

export class ClassicGameOfLife extends GameOfLifeBase {

    constructor(x: number, y: number) {
        super();
        this.SetWidth(x);
        this.SetHeight(y);
        this.SetRules(new ClassicRules());
        this.SetInitialGeneration(CreateBooleanArray(x, y));
    }

/**
 * This function generates the next generation of cells in a game of life simulation based on the
 * current state and a set of rules.
 */
    public NextGeneration(): void 
    {
        const newCells: boolean[][] = new Array(this.GetWidth());

        for (let i = 0; i < this.GetWidth(); i++) 
        {
            newCells[i] = new Array(this.GetHeight()).fill(false);
        }

        for (let x = 0; x < this.GetWidth(); x++) {
            for (let y = 0; y < this.GetHeight(); y++) 
            {
                const cellState: boolean = this.GetCell(x, y);
                const neighborsCount: number = this.CountWrapNeighbors(x, y);
                newCells[x][y] = this.GetRules().ApplyRules(cellState, neighborsCount);
            }
        }
    
        this.updateBoard(newCells);
    }

    /**
     * This function updates the board by setting the cells to the values in a new boolean array.
     * @param {boolean[][]} newCells - a 2D boolean array representing the new state of the game board.
     * Each element in the array represents a cell on the board, with a value of true indicating that
     * the cell is alive and a value of false indicating that the cell is dead. The dimensions of the
     * array should match the dimensions of
     */
    private updateBoard(newCells: boolean[][]): void 
    {
        for (let x = 0; x < this.GetWidth(); x++) 
        {
            for (let y = 0; y < this.GetHeight(); y++) 
            {
                this.SetCell(x, y, newCells[x][y]);
            }
        }
    }
}  