const quickSort = arr => {
    let lower = [], higher = [];

    let pivot = arr[ Math.floor(Math.random() * arr.length) ];

    for (let el of arr) {
        if (el < pivot)
            lower.push(el)
        else if (el > pivot)
            higher.push(el)
    }
    console.log(`low = ${lower}, high = ${higher}`)
    lower.push(pivot);
    let res = lower;

    for (el of higher) res.push(el)

    return res;
};


const tab = [4, 3, 9, 1, 10, 2];
quickSort(tab)
// console.log(quickSort(tab))