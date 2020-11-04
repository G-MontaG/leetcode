// https://leetcode.com/problems/word-search/
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const go = (x, y, k, h, w, board, word) => {
  if (board[x][y] !== word[k]) return false;
  if (k === word.length - 1) return true;

  board[x][y] = "*"; // mark as visited
  for (const [dx, dy] of dirs) {
    const i = x + dx;
    const j = y + dy;
    if (i >= 0 && i < h && j >= 0 && j < w) {
      if (go(i, j, k + 1, h, w, board, word)) return true;
    }
  }
  board[x][y] = word[k]; // reset
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0, h, w, board, word)) return true;
    }
  }

  return false;
};
