const { grid } = require('./countPaths.json');

const funcs = {
  traverseGrid: function (grid) {
    let paths = {};
    let row = grid.length - 1;

    while(row >= 0) {
      let col = grid[row].length - 1;
      while (col >= 0) {
        // Ensure row exists
        if (!paths[row]) paths[row] = {};
        paths[row][col] = this.countPaths(grid, row, col, paths);
        col -= 1;
      }
      row -= 1;
    }

    return paths[0][0];
  },
  countPaths: function (grid, row, col, paths) {
    if (!this.validSquare(grid, row, col)) {
      return 0;
    }
    if (this.isAtEnd(grid, row, col)) {
      return 1;
    }

    if (!paths[row][col]) {
      paths[row][col] = this.countPaths(grid, row + 1, col, paths) + this.countPaths(grid, row, col + 1, paths);
    }

    console.log({paths});

    return paths[row][col];
  },
  validSquare: function (grid, row, col) {
    return grid[row] && grid[row][col];
  },
  isAtEnd: function (grid, row, col) {
    const lastRow = row === grid.length - 1;
    const lastCol = col === grid[row].length - 1;

    return lastRow && lastCol;
  }
};

const result = funcs.traverseGrid(grid);

console.log({ result, grid });

module.exports = funcs;
