/**
 * 
 * @param {number} target 
 * @param {number[]} nums 
 * @returns {number[]}
 */
 const howSum = (target, nums, li=[]) => {
    console.log('the list ' + li)
    if (target < 0) return null;
    if (target === 0) return li;

    for (let el of nums) {
        let diff = target - el;
        
        let r = howSum(diff, nums, [...li, el]);
        if (r != null) return r;

    }

    return null;

}

/**
 * Input: target = 7, nums = [5, 3, 4, 7]
 */
let t = 7, nums = [5, 3, 4, 7];
console.log(howSum(t, nums))