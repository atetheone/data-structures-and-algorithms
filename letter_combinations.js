/**
 * Given a string containing digits for 2-9 inclusive, return
 * all possible letter combinations that the number could represent
 *      2 => ['a', 'b', 'c'],
 *      3 => ['d', 'e', 'f'],
 *      4 => ['g', 'h', 'i'],
 *      5 => ['j', 'k', 'l'],
 *      6 => ['m', 'n', 'o'],
 *      7 => ['p', 'q', 'r', 's'],
 *      8 => ['t', 'u', 'v'],
 *      9 => ['w', 'x', 'y', 'z']
 * 
 * Example:
 *      input: "23"
 *      output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */

/**
 * 2: 'a', 'b', 'c'
 * 3: 'd', 'e', 'f'
 * 4: 'g', 'h', 'i'
 * 
 * input: "234"
 *  "23" = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] 
 *   "4" = ['g', 'h', 'i']
 */



const mapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}
/**
 * 
 * @param {string} l1 
 * @param {string} l2 
 * @returns {string[]}
 */
const comb2 = (l1, l2) => {
    // combine two list
    const res = [];
    for (let el1 of l1)
        for (let el2 of l2)
            res.push(el1 + el2);
    return res
}

const letterCombinations = (s) => {
    if (!s) return [];
    if (s.length === 1) return mapping[s];

    let combinations = mapping[s[0]];

    let i = 1;
    while (i < s.length) 
        combinations = comb2(combinations, mapping[s[i++]]);

    return combinations;
};

let c = letterCombinations("2345");
