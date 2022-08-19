/**
 * Given an array of integers nums, and an integer target
 * return the indexes [i, j] where nums[i] + nums[j] = target
 * 
 * Note**: Time complexity should be O(n)
 */

/**
 * eg = nums = [3, 2, 5, 1, 7], target = 7
 * -nums + target = [4, 5, ]
 */

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let hash = {};
    for (let i in nums) {
        let current = nums[i], diff = target - current;
        if (hash[diff]) { // check if current element in diff hash
            return [+hash[diff], +i];
        } else {
            hash[current] = i;
        }
    }

    return [-1, -1];
};

let nums = [3, 0, 5, 1, 7], target = 7;

console.log(twoSum(nums, target));