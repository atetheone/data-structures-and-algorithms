/**
 * 
 * @param {number} target 
 * @param {number[]} nums 
 * @returns {number[]}
 */
 const howSum = (target, nums, mem={}) => {

    if (target in mem) return mem[target]
    if (target < 0) return null;
    if (target === 0) return [];

    for (let el of nums) {
        let diff = target - el;
        
        let r = howSum(diff, nums, mem);
        if (r != null) {
            mem[target] =  [...r, el]
            return mem[target];
        }

    }
    mem[target] = null
    return mem[target];

} 

/**
 * Input: target = 7, nums = [5, 3, 4, 7]
 */
let t = 7, nums = [1, 2];
console.log(howSum(t, nums))