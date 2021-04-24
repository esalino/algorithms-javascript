// https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem
function reverseShuffleMerge(s) {
    // map of characters to required counts (total counts / 2)
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const count = map[s[i]] ? map[s[i]] + 1 : 1;
        map[s[i]] = count;
    }
    // chars will be a sorted array to keep track of the next optimal selection
    let chars = [];
    // selectedMap to keep track of what has been used
    const selectedMap = {};
    // seenMap to keep track of what as been currently iterated over
    const seenMap = {};
    for (let i in map) {
        selectedMap[i] = 0;
        seenMap[i] = 0;
        map[i] = map[i] / 2;
        const count = map[i];
        for (let j = 0; j < count; j++) {
            chars.push(i);
        }
    }
    chars = chars.sort();

    // found will be the final result
    let found = [];
    let i = s.length - 1;
    // leastSeen will track the optinal char to go back to if we are forced to make a selection
    let leastSeen = null;
    while (i >= 0 && found.length < s.length / 2) {
        if (s[i] === chars[0] && selectedMap[s[i]] < map[s[i]]) {
            // We have found an optimal selection
            found.push(s[i]);
            selectedMap[s[i]] += 1;
            leastSeen = null;
            removeChar(chars, s[i]);
        } else if ((seenMap[s[i]] - selectedMap[s[i]]) >= map[s[i]]) {
            // we are forced to make a selection at this point
            // we will use the optimal char based on leastSeen
            if (leastSeen === null || s[i] < s[leastSeen]) {
                leastSeen = i;
            } else {
                // revert seen map to match updated last seen
                for (let j = i + 1; j <= leastSeen; j++) {
                    seenMap[s[j]] -= 1;
                }
            }
            i = leastSeen;
            found.push(s[i]);
            selectedMap[s[i]] += 1;
            leastSeen = null;
            removeChar(chars, s[i]);
        } else {
            // continue and update leastSeen if needded
            if (selectedMap[s[i]] < map[s[i]] && (leastSeen === null || s[i] < s[leastSeen])) {
                leastSeen = i;
            }
        }
        seenMap[s[i]] += 1;
        i--;
        
    }
    return found.join('');
}

function removeChar(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            arr.splice(i, 1);
            return;
        }
    }
}

module.exports = reverseShuffleMerge;