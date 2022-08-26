/**
 * Assuming you are  a traveler on 2D grid.
 * Starting from top left corner, your goal is to reach
 *  the bottom right corner. You may only move right or bottom
 * Return the number of ways you can reach that goal
 * @param {number} m 
 * @param {number} n 
 * @returns {number}
 */
const gridTraveler = (m, n, memo={}) => {
    let key = `${m},${n}`
    if (key in memo) return memo[k];
    if (!m || !n) return 0;
    if (m == 1 && n == 1) return 1;

    memo[key] =  gridTraveler(m - 1, n) + gridTraveler(m, n - 1);

    return memo[key]
}

const gridTraveler$ = (m, n, memo={}) => {
    let key = `${m},${n}`
    if (key in memo) return memo[k];
    if (!m || !n) return 0;
    if (m == 1 && n == 1) return 1;

    memo[key] =  gridTraveler$(m - 1, n, memo) + gridTraveler$(m, n - 1, memo);

    return memo[key]
}


console.log(gridTraveler(3, 3))
