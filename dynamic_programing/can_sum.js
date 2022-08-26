/**
 * 
 * @param {number} target 
 * @param {number[]} nums 
 * @returns {boolean}
 */
const canSum = (target, nums, memo={}) => {

    if (target in memo) return memo[target]
    if (target < 0) return false
    if (target === 0) return true;
    for (let el of nums) {
        let diff = target - el;
        memo[diff] = canSum(diff, nums, memo);
        if (memo[diff] === true) return true;
    }

    return false;

}

/**
 * Input: target = 7, nums = [5, 3, 4, 7]
 */
let t = 10, nums = [5, 5, 4];
console.log(canSum(t, nums))