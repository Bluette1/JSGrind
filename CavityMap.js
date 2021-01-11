const toInt = (str) => parseInt(str, 10);
const maximum = (max, numbers) => {
  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (numbers[idx] >= max) {
      return false;
    }
  }
  return true;
};
const cavityMap = (grid) => {
  const gridCopy = [...grid];
  for (let row = 1; row < grid.length - 1; row += 1) {
    const numbers = grid[row].split('');
    for (let col = 1; col < grid.length - 1; col += 1) {
      const center = toInt(grid[row].charAt(col));
      const left = toInt(grid[row].charAt(col - 1));
      const right = toInt(grid[row].charAt(col + 1));
      const top = toInt(grid[row - 1].charAt(col));
      const bottom = toInt(grid[row + 1].charAt(col));
      if (maximum(center, [left, right, top, bottom])) {
        numbers[col] = 'X';
      }
    }
    gridCopy[row] = numbers.join('');
  }
  return gridCopy;
};

const grid = ['1112', '1912', '1892', '1234'];
cavityMap(grid);
