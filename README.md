# Game of Life Builder Library

![https://img.shields.io/badge/License-MIT-yellow.svg](https://img.shields.io/badge/License-MIT-yellow.svg)

![https://img.shields.io/badge/JavaScript-ES6-yellow.svg](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)

![https://img.shields.io/badge/TypeScript-Ready-blue.svg](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

This is a TypeScript library for creating and simulating Conway's Game of Life.

## **Installation**

To install this library, simply run the following command:

```bash
npm install game-of-life-builder
```

## **Usage**

To use the library, first, import it into your TypeScript file:

```tsx
import { GameOfLifeBuilder } from 'game-of-life-library';

```

You can then use the **`GameOfLifeBuilder`** class to build a Game of Life instance.

```tsx
const initialGeneration = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
];

const builder = new GameOfLifeBuilder();
const game = builder
  .withInitialGeneration(initialGeneration)
  .setAsClassicGameOfLife(3, 3)
  .build();

// run the game for 10 iterations
for (let i = 0; i < 10; i++) {
  game.nextGeneration();
}
```

## **API**

The **`GameOfLifeBuilder`** class provides the following methods:

### **withInitialGeneration(initialGeneration: boolean[][]): GameOfLifeBuilder**

This function sets the initial generation of a Game of Life instance.

- **`initialGeneration`**: A two-dimensional boolean array representing the initial state of the cells in the Game of Life. Each element in the array represents a cell, and its value indicates whether the cell is alive (**`true`**) or dead (**`false`**). The dimensions of the array determine the size of the game board.
- Returns: The method **`withInitialGeneration`** returns an instance of **`GameOfLifeBuilder`**.

### **withRules(rules: IGameRules): GameOfLifeBuilder**

This function sets the rules for the Game of Life and returns a **`GameOfLifeBuilder`** object.

- **`rules`**: An object that defines the rules for a game of life simulation.
- Returns: The method **`withRules`** returns a **`GameOfLifeBuilder`** object.

### **setAsClassicGameOfLife(width: number, height: number): GameOfLifeBuilder**

This function sets the game type as Classic Game of Life and returns a **`GameOfLifeBuilder`** object.

- **`width`**: The width of the game board/grid in the Classic Game of Life.
- **`height`**: The number of rows in the game grid.
- Returns: The method **`setAsClassicGameOfLife`** returns an instance of **`GameOfLifeBuilder`**.

### **build(): GameOfLifeBase**

This function initializes a Game of Life instance and returns it.

- Returns: An instance of the **`GameOfLifeBase`** class after initializing it with the **`Init()`** method of the **`Game`** object.

## **Helper Function**

The library also provides a helper function **`CreateBooleanArray`** to create a 2D boolean array.

### **CreateBooleanArray(x: number, y: number): boolean[][]**

This function creates a 2D boolean array with a specified number of rows and columns.

- **`x`**: The number of rows in the boolean array.
- **`y`**: The number of columns in the 2D boolean array that will be created by the **`CreateBooleanArray`** function.
- Returns: A 2-dimensional boolean array with **`x`** rows and **`y`** columns, where all values are initialized to **`false`**.

## **Examples**

To see more examples of how to use this library, please refer to the **`Samples`** folder in the repository.

## **License**

This library is licensed under the MIT License. See the **`LICENSE`** file for more information.

## **Support**
If you find useful, consider supporting the project by making a donation via PayPal:

[Support in Paypal ♥️ ](https://www.paypal.com/donate/?hosted_button_id=Z6KKYZKYY25CW)