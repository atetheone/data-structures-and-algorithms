function riverSizes(matrix) {
    let visited = new Array(matrix.length);

    for (let i = 0; i < matrix.length; i++) {
        visited[i] = new Array(matrix[i].length).fill(false);
    }

    const sizer = (row, col) => {
        if (row < 0 || col  >= matrix[0].length || row >= matrix.length || col < 0) 
            return 0;
        if (visited[row] && visited[row][col] === true) return 0;
        if (matrix[row] && matrix[row][col] === 0) return 0;

        visited[row][col] = true;
        return 1 
            + sizer(row - 1, col) 
            + sizer(row + 1, col) 
            + sizer(row, col - 1) 
            + sizer(row, col + 1); 
    };

    let result = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!visited[i][j])  {
            let size_ = sizer(i, j)
            if (size_ > 0) result.push(size_)
        }
      }
    }
  
    return result;
}

let matrix =  [
    [1, 0, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 1],
];
console.log(riverSizes(matrix))