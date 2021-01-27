// https://www.hackerrank.com/challenges/game-of-two-stacks/problem

function twoStacks(x, a, b) {
    let count = 0;
    let total = 0;
    let ai = 0;
    let bi = 0;
    let maxCount = 0;
    while (ai < a.length && total + a[ai] <= x) {
        total += a[ai];
        ai++;
        count++;
    }
    ai--;
    while (bi < b.length && total + b[bi] <= x) {
        total += b[bi];
        bi++;
        count++;
    }
    maxCount = count;
    while (bi < b.length) {
        if (ai >= 0) {
            total -= a[ai--];
            count--;
        }
        while (total + b[bi] <= x && bi < b.length) {
            total += b[bi++];
            count++;
        }
        maxCount = maxCount < count ? count : maxCount;
        if (bi === b.length || ai === -1) {
            break;
        }
    }
    return maxCount;
}

module.exports = twoStacks;