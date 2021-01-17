/**
 * https://www.hackerrank.com/challenges/3d-surface-area/problem
 *
 * @param {number} board
 */
const sideArea = (H, W, board) => {
  let totalArea = 0;
  if (H === 1) {
    let area = 0;
    for (let row = 0; row < W; row += 1) {
      area += 2 * board[0][row];
    }
    totalArea += area;

    const firstRow = board[0];
    [area] = firstRow;
    for (let row = 1; row < W; row += 1) {
      const exposedArea = board[0][row] - board[0][row - 1];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;

    area = board[0][W - 1];

    for (let row = W - 2; row >= 0; row -= 1) {
      const exposedArea = board[0][row] - board[0][row + 1];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;
    return totalArea;
  }

  if (W === 1) {
    let area = 0;
    for (let row = 0; row < H; row += 1) {
      area += 2 * board[row][0];
    }
    totalArea += area;

    const firstRow = board[0];
    [area] = firstRow;
    for (let row = 1; row < H; row += 1) {
      const exposedArea = board[row][0] - board[row - 1][0];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }

    totalArea += area;
    const lastRow = board[H - 1];
    [area] = lastRow;
    for (let row = H - 2; row >= 0; row -= 1) {
      const exposedArea = board[row][0] - board[row + 1][0];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;
    return totalArea;
  }

  for (let row = 0; row < H; row += 1) {
    let area = board[row][0];
    for (let col = 1; col < W; col += 1) {
      const exposedArea = board[row][col] - board[row][col - 1];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }

    totalArea += area;

    area = board[row][W - 1];
    for (let col = W - 2; col >= 0; col -= 1) {
      const exposedArea = board[row][col] - board[row][col + 1];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;
  }

  for (let col = 0; col < H; col += 1) {
    let area = board[0][col];
    for (let row = 1; row < W; row += 1) {
      const exposedArea = board[row][col] - board[row - 1][col];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;

    area = board[W - 1][col];

    for (let row = W - 2; row >= 0; row -= 1) {
      const exposedArea = board[row][col] - board[row + 1][col];
      if (exposedArea > 0) {
        area += exposedArea;
      }
    }
    totalArea += area;
  }
  return totalArea;
};

const surfaceArea = (board) => {
  const H = board.length;
  const W = board[0].length;
  let totalArea = 0;
  totalArea += sideArea(H, W, board);
  totalArea += 2 * (H * W);
  return totalArea;
};

console.log(surfaceArea([[1]]));
console.log(surfaceArea([
  [1, 3, 4], [2, 2, 3], [1, 2, 4],
]));

console.log(surfaceArea([
  [51],
  [32],
  [28],
  [49],
  [28],
  [21],
  [98],
  [56],
  [99],
  [77],
]));

console.log(surfaceArea([
  [51,
    32,
    28,
    49,
    28,
    21,
    98,
    56,
    99,
    77],
]));
