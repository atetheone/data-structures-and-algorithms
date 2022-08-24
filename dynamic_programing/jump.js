/**
 * 
 * @param {number[]} nums 
 */
const canJump = nums => {
    let step = 0, i = 0,n = nums.length;

    while (step + i < n && i < n) {
        step--;
        step = Math.max(step, nums[i]);
        if (!step) break;
        
        i++;
    }

    return step + i >= n;
}
let arr = [3,2,1,0,4]
let test = jump(arr)
console.log(test)