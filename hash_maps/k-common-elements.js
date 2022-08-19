/**
 * Given an array of k arrays of sorted numbers arrs
 * return the common elements of these arrays
 * 
 * Note**: Time complexity should be O(k * n)
 */

/**
 * eg: 
 *  arrs = [
 *      [1, 2, 5, 9],
 *      [1, 2, 3, 6, 7],
 *      [1, 2, 4, 7]
 * ];
 * output: [1, 2]
 */

/**
 * 
 * @param {number[][]} arrs 
 * @return {number[]}
 */
const kCommonElements = arrs => {
    let res = [], hash = {}, prev, k = arrs.length;

    for (let i = 0; i < k; i++) {
        let currentArray = arrs[i];
        prev = null;
        for (let el of currentArray) {
            if (prev !== el) {
                if (!hash[el]) hash[el] = 1;
                else hash[el]++;
            }
            prev = el;
        }
    }
    for (let key in hash) {
        if (hash[key] === k) res.push(+key)
    }

    return res;
};

let arrs = [
    [1, 2, 5, 9, 9, 9],
    [1, 2, 5, 6, 7],
    [1, 2, 4, 5, 7]
];
let common = kCommonElements(arrs);
console.log(common);