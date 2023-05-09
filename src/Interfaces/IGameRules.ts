
/* This code is defining an interface named `IGameRules` with a single method `ApplyRules`. The
`ApplyRules` method takes two parameters: `cellState` of type boolean and `neighborsCount` of type
number, and returns a boolean value. The `export` keyword makes this interface available for use in
other modules. */
export interface IGameRules {
    ApplyRules(cellState: boolean, neighborsCount: number): boolean;
}
  
