
/**
 * bills
 */
class Atm {
    NOTES = [20, 50, 100, 200, 500];
    bills = new Array(5).fill(0);
    /**
     * 
     * @param {number[]} bills 
     */
    constructor() {
    }

    deposit(bills) {
        if (bills.length !== 5) return;
        for (let i in bills) {
            this.bills[i] += bills[i];
        }
        console.log('Bills in the bank: ' + this.bills);
    }

    getTotal() {
        let total = 0;
        for (let i in this.bills) {
            total += this.NOTES[i] * this.bills[i];
        }

        return total;
    }

    withdraw(amount) {
        // convert the amount into bills array
        let i = 4, intoBills = new Array(5).fill(0);
        while(amount > 0 && i >= 0) {
            let nbBills = Math.floor(amount / this.NOTES[i]);
            // amount = amount % this.NOTES[i];
            if (this.bills[i] < nbBills) {
                intoBills[i] = this.bills[i];
                amount -= this.bills[i] * this.NOTES[i];
            } else {
                intoBills[i] = nbBills;
                amount = amount % this.NOTES[i];
            }
            i--;
        }
        if (amount > 0) return [-1];
        // substract the bills stored
        for (let i in this.bills) {
            this.bills[i] -= intoBills[i];
        }
        // console.log(this.bills);
        return intoBills;

    }
}

let atm = new Atm();

// deposit {20: 3, 50: 2, 100: 10, 200: 5, 500: 5} 60 + 100 + 1000 + 2500
atm.deposit([0,0,1,2,1]);
console.log('Total: ' + atm.getTotal());
// atm.deposit([0, 0, 0, 0, 2]);
// console.log('Total: ' + atm.getTotal());
console.log(atm.withdraw(600));
console.log('Total: ' + atm.getTotal());

atm.deposit([0,1,0,1,1]);
console.log('Total: ' + atm.getTotal());

console.log(atm.withdraw(600));
console.log('Total: ' + atm.getTotal());

console.log(atm.withdraw(550)); 
console.log('Total: ' + atm.getTotal());