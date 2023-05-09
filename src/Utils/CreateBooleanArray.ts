/**
 * The function creates a 2D boolean array with a specified number of rows and columns.
 * @param {number} x - The number of rows in the boolean array.
 * @param {number} y - The parameter `y` is the number of columns in the 2D boolean array that will be
 * created by the `CreateBooleanArray` function.
 * @returns A 2-dimensional boolean array with x rows and y columns, where all values are initialized
 * to false.
 */
function CreateBooleanArray(x: number, y: number): boolean[][] {
  return Array.from({ length: x }, () => Array.from({ length: y }, () => false));
}

export{
    CreateBooleanArray
}