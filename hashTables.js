/**
 * 
 * @param {number} size 
 * @author Ate
 * @return {Class}
 */
function HashTable(size) {
    this.keys = this.initArray(size)
    this.values = this.initArray(size)
    this.size = size
    this.limit = 0
}

HashTable.prototype.hash = function(key) {
    if (isNaN(key)) throw "Key has to be a number"
    return key % this.size
}

HashTable.prototype.get = function(key) {
    const hash = this.hash(key)
    
    while (this.keys[hash] !== key) {
        hash++

        hash = hash % this.size
    }
    return this.values[hash]
}

HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw "Hash table is full!!"

    let hash = this.hash(key);

    while (this.keys[hash]) {
        hash = (hash + 1) % this.size
    }
    this.keys[hash] = key
    this.values[hash] = value

    this.limit++
}

HashTable.prototype.initArray = function() {
    let array = []
    for (let i = 0; i < this.size; i++) {
        this.array.push(null)
    }

    return array
}

let exampletable = new HashTable(13)
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad")
console.log(`k= ${exampletable.keys}\nv=${exampletable.values}`)