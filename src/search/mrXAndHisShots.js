// https://www.hackerrank.com/challenges/x-and-his-shots

// Complete the solve function below.
function solve(shots, players) {
    let shotsB = shots.slice(0);
    shots.sort((a,b) => {
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
        return 0;
    });
    shotsB.sort((a,b) => {
        if(a[1] > b[1]) return 1;
        if(a[1] < b[1]) return -1;
        return 0;
    });
    // we will do a binary search on each side of the shots to find the
    // shots the players cannot field (players[1] < shots[0] && players[0] > shots[1])
    // and subtract that from all possible
    let count = 0;
    for (let i = 0; i < players.length; i++) {
        const iToRight = binarySearchRight(shots, players[i][1], 0, shots.length - 1);
        const toRight = iToRight === -1 ? 0 : shots.length - iToRight;
        count += toRight;
    }
    for (let i = 0; i < players.length; i++) {
        const iToLeft = binarySearchLeft(shotsB, players[i][0], 0, shots.length - 1);
        const toLeft = iToLeft + 1;
        count += toLeft;
    }
    count = (shots.length * players.length) - count;
    return count;
}

function binarySearchRight(arr, target, left, right) {
    if (right < left) {
        return -1;
    }
    let mid = Math.floor((right - left) / 2) + left;
    if (arr[mid][0] > target && (mid === left || arr[mid - 1][0] <= target)) {
        return mid;
    }
    if (target >= arr[mid][0]) {
        return binarySearchRight(arr, target, mid + 1, right);
    } else {
        return binarySearchRight(arr, target, left, mid - 1);
    }
}

function binarySearchLeft(arr, target, left, right) {
    if (right < left) {
        return -1;
    }
    let mid = Math.floor((right - left) / 2) + left;
    if (arr[mid][1] < target && (mid === right || arr[mid + 1][1] >= target)) {
        return mid;
    }
    if (target > arr[mid][1]) {
        return binarySearchLeft(arr, target, mid + 1, right);
    } else {
        return binarySearchLeft(arr, target, left, mid - 1);
    }
}

module.exports = solve;