https://www.hackerrank.com/challenges/max-array-sum/problem

function maxSubsetSum(arr) {
    const cache = (new Array(arr.length)).fill(0);
    cache[0] = Math.max(arr[0], 0);
    cache[1] = Math.max(arr[1], 0);
    cache[2] = Math.max(Math.max(cache[2], cache[0] + arr[2]), cache[0]);
    cache[2] = Math.max(cache[2], 0);

    for (let i = 3; i < arr.length; i++) {
        let temp = Math.max(arr[i] + cache[i - 2], arr[i] + cache[i - 3]);
        temp = Math.max(temp, arr[i]);
        temp = Math.max(temp, cache[i - 2]);
        temp = Math.max(temp, cache[i - 3]);
        cache[i] = Math.max(temp, 0);
    }

    return Math.max(cache[cache.length - 1], cache[cache.length - 2]);
}

module.exports = maxSubsetSum;