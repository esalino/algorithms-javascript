// https://www.hackerrank.com/challenges/minimum-time-required/problem

function minTime(machines, goal) {
    // The goal happens on a timeline which we can think of
    // as a simple sorted array of days and we can search for the
    // goal using binary search.

    // Get the min and max producing time of the machines
    let min = machines[0];
    let max = min;
    for (let i = 0; i < machines.length; i++) {
        if (machines[i] < min) {
            min = machines[i];
        } else if (machines[i] > max) {
            max = machines[i];
        }
    }
    // Get the starting left and right using the min and max producing times.
    let left = Math.ceil(goal / machines.length) * min;
    let right = Math.ceil(goal / machines.length) * max;
    let found = search(machines, goal, left, right);

    // Because this is not an exaxt match we can be past the goal
    // so check found - 1 to see if that reaches the goal
    while (found > 0) {
        let count = 0;
        for (let i = 0; i < machines.length; i++) {
            count += Math.floor((found - 1) / machines[i]);
        }
        if (count !== goal) {
            break;
        }
        found--;
    }
    return found;
}

function search(machines, goal, left, right) {
    if (right < left) {
        return -1;
    }
    let mid = Math.floor((right - left) / 2) + left;
    let countOfProduced = 0;
    let leftCount = 0;
    let rightCount = 0;
    // calc the number produced at mid, left of mid and right of mid
    for (let i = 0; i < machines.length; i++) {
        countOfProduced += Math.floor(mid / machines[i]);
        leftCount += Math.floor((mid - 1) / machines[i]);
        rightCount += Math.floor((mid + 1) / machines[i]);
    }
    // We have reached our goal without going past it
    if (countOfProduced === goal || (leftCount < goal && countOfProduced > goal)) {
        return mid;
    }
    // Sine we are not looking for an exact match check if first
    // count to right has made the goal.
    if (countOfProduced < goal && rightCount > goal) {
        return mid + 1;
    }
    // We have not found the goal so recurse next mid.
    if (countOfProduced > goal) {
        return search(machines, goal, left, mid - 1);
    } else {
        return search(machines, goal, mid + 1, right);
    }
}

module.exports = minTime;