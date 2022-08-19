/**
 * Given a n*n matrix print all its element in spiral order
 */

/**
 * eg: 
 *  arrs = [
 *      [1, 2, 5, 9],
 *      [1, 2, 3, 6],
 *      [1, 2, 4, 7]
 * ];
 * output: 1, 2, 5, 9, 6, 7, 4, 2, 1, 1, 2, 3
 *      0,1 0,2 0,3 
 *      1,3 2,3 
 *      2,2 2,1 2,0 
 *      1,0 1,1 1,2
 */

/**
 * 
 * @param {number[][]} m 
 * @return {void}
 */
const printSpiral = m => {
    
    let topRow = 0, rightCol = m.length - 1, bottomRow = m.length - 1, leftCol = 0;

    while (topRow < bottomRow && leftCol < rightCol) {
        for (let col = 0; col <= rightCol; col++) {
            console.log(m[topRow][col]);
        }
        topRow++;
        for (let row = topRow; row <= bottomRow; row++) {
            console.log(m[row][rightCol])
        }
        rightCol--;
        if (topRow <= bottomRow) {
            for (let col = rightCol; col >= 0; col--) {
                console.log(m[bottomRow][col]);
            }
            bottomRow--;
        }
        if (leftCol <= rightCol) {
            for (var row = bottomRow; row > topRow; row--) {
                console.log(m[row][leftCol]);
            }
            leftCol++;
        }
    }
};

let arrs = [
    [1, 2, 5],
    [3, 0, 5],
    [1, -1, 4]
];

printSpiral(arrs)