let purchases = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < purchases.length; i++) {
    sum = sum + purchases[i];
}
let averageReceipt = sum / purchases.length;
console.log('Average receipt:', averageReceipt);
