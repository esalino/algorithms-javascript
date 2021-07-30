// https://www.hackerrank.com/challenges/new-year-chaos/problem
// force a change again
function minimumBribes(q) {
    const bribeMap = {};
    let numSwaps = 0;
    let i = 0;
    while(i < q.length - 1) {
        if (q[i] - 1 === i) {
            i++;
            continue;
        }
        let j = i;
        while (q[j] < q[j + 1]) {
            j++;
        }
        numSwaps++;
        const c = bribeMap[q[j]] ? bribeMap[q[j]] + 1 : 1
        bribeMap[q[j]] = c;
        if (bribeMap[q[j]] > 2) {
            return 'Too chaotic';
        }
        const t = q[j];
        q[j] = q[j + 1];
        q[j + 1] = t;
    }
    return numSwaps;
    
}

module.exports = minimumBribes;