/**
 * 
 * @param {number} target 
 * @param {number[]} nums 
 * @returns {number[]}
 */
 const bestSum = (target, nums, mem={}) => {

    if (target in mem) return mem[target]
    if (target < 0) return null;
    if (target === 0) return [];
    let finalResult = null;
    for (let el of nums) {
        let diff = target - el;
        
        let r = bestSum(diff, nums, mem);
        if (r !== null) {
            mem[target] =  [...r, el]
            if (finalResult === null || mem[target].length < finalResult.length) {
                finalResult = mem[target];
            }
        }

    }

    return finalResult;

} 

/**
 * Input: target = 7, nums = [5, 3, 4, 7]
 */
let t = 8, nums = [2, 3, 5];
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))