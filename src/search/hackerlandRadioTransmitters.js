
// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem
function hackerlandRadioTransmitters(x, k) {

    const set = new Set();
    for (let i = 0; i < x.length; i++) {
        set.add(x[i]);
    }
    let arr = [];
    set.forEach((a) => {
        arr.push(a);
    });

    arr = arr.sort((a,b) => {return a - b;});
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (i === arr.length - 1) {
            count++;
            break;
        }
        const firstTarget = arr[i] + k;
        let j = i + 1;
        while (j < arr.length && arr[j] < firstTarget) {
            j++;
        }
        if (arr[j] > firstTarget) {
            j = j - 1;
        }
        const nextTarget = arr[j] + k;
        if (j < arr.length - 1 && nextTarget !== firstTarget) {
            j++;
            while (j < arr.length && arr[j] < nextTarget) {
                j++;
            }
            if (arr[j] > nextTarget) {
                j = j - 1;
            }
        }
        i = j + 1;
        count++;
    }
    return count++;
}

module.exports = hackerlandRadioTransmitters;