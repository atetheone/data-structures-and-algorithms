/**
 * 
 * @param {string} word 
 * @param {string[]} listSubs 
 * @returns {boolean}
 */
 const canContruct = (word, listSubs, mem={}) => {
    if (word in mem) return mem[word];
    if (word === '') return [];

    for (let sub of listSubs) {
        if (word.startsWith(sub)) {
            console.log('pr ' + word.substring(sub.length));
            let call = canContruct(word.substring(sub.length), listSubs);
            if (call !== null) {
                mem[sub] =  [sub, ...call];
                return mem[sub];
            }
        }
    }
    return null;
};

/**
 * Input: word= "abcdef", list=["ab", "abc", "cd", "def", "abcd"]
 */
let word= "skateboard", list=["bo", "rd", "ate", "ska", "t", "sk", 'board'];
console.log(canContruct(word, list))