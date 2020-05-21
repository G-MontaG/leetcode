// https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i < j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }
    matrix.forEach((row) => row.reverse());
};       
