function poisonousPlants(p) {
    const stack = [];
    stack.push([p[0], 0]);
    let maxDays = 0;
    let i = 1;
    while (i < p.length) {
        if (p[i] < stack[stack.length - 1][0]) {
            // My left friend will not kill me so I might die one day after him
            let minDays = stack[stack.length - 1][1] + 1;
            while (p[i] < stack[stack.length - 1][0]) {
                if (stack[stack.length - 1][1] === 0) {
                    // I ran into a left frind who wont die and wont kill me
                    break;
                }
                // My left friend will no kill me so I might die one day after him
                minDays = Math.max(stack[stack.length - 1][1] + 1, minDays);
                maxDays = stack[stack.length - 1][1] > maxDays ? stack[stack.length - 1][1] : maxDays;
                stack.pop();
            }
            if (p[i] < stack[stack.length - 1][0] && stack[stack.length - 1][1] === 0) {
                // I ran into a left frind who wont die and wont kill me
                stack.push([p[i], 0]);
            } else if (p[i] > stack[stack.length - 1][0]) {
                // My farthest left friend will kill me on x + 1
                stack.push([p[i], minDays]);
            } else {
                // I ran into a friend with the same days so I will die on the max of
                // him + 1 and the previous calculated days.
                minDays = stack[stack.length - 1][1] === 0 ? 0 : Math.max(minDays, stack[stack.length - 1][1] + 1);
                stack.push([p[i], minDays]);
            }           
        } else if (p[i] === stack[stack.length - 1][0]) {
            if (stack[stack.length - 1][1] === 0) {
                // I am equal to my left friend and he won't die so I won't die
                stack.push([p[i], 0]);
            } else {
                // I am equal to my left frind and he will die on day x
                // so I will die on day x + 1
                stack.push([p[i], stack[stack.length - 1][1] + 1]);
            }
        } else if (p[i] > stack[stack.length - 1][0]) {
            // I am greater then my left friend so I will die on day 1 
            stack.push([p[i], 1]);
        }
        i++;
    }
    for (let j = stack.length - 1; j >= 0 && stack[stack.length - 1][1] > 0; j--) {
        maxDays = stack[j][1] > maxDays ? stack[j][1] : maxDays;
    }
    return maxDays;
}

module.exports = poisonousPlants;