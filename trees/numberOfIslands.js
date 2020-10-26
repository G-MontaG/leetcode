// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, H, W, r, c) => {
  if (r < 0 || c < 0 || r === H || c === W) return;
  if (grid[r][c] === "0") return;

  grid[r][c] = "0";
  dfs(grid, H, W, r - 1, c);
  dfs(grid, H, W, r + 1, c);
  dfs(grid, H, W, r, c - 1);
  dfs(grid, H, W, r, c + 1);
};

const numIslands = (grid) => {
  if (!grid) return 0;
  const H = grid.length;
  const W = H && grid[0].length;
  let count = 0;

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(grid, H, W, r, c);
      }
    }
  }
  return count;
};
