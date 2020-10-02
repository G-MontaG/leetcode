// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const r = matrix.length;
  const l = matrix[0].length;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (Object.is(matrix[i][j], 0)) {
        for (let x = 0; x < r; x++) {
          matrix[x][j] = matrix[x][j] && -0;
        }
        for (let y = 0; y < l; y++) {
          matrix[i][y] = matrix[i][y] && -0;
        }
      }
    }
  }
};
