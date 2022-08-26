/**
 * 
 * @param {string} word 
 * @param {string[]} listSubs 
 * @returns {boolean}
 */
const canContruct = (word, listSubs, mem={}) => {
    if (word in mem) return mem[word]
    if (word === '') return true;

    for (let sub of listSubs) {
        if (word.startsWith(sub)) {
            console.log('pr ' + word.substring(sub.length));
            let call = canContruct(word.substring(sub.length), listSubs);
            if (call !== true) {
                mem[sub] = false;
            }else {
                mem[sub] = true;
                return mem[sub];
            }
        }
    }
    return false;
};

/**
 * Input: word= "abcdef", list=["ab", "abc", "cd", "def", "abcd"]
 */
let word= "atetougue", list=["gue", "tou", "te", "a", "abcd"];
console.log(canContruct(word, list))