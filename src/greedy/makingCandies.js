// https://www.hackerrank.com/challenges/making-candies/problem

function minimumPasses(m, w, p, n) {
    let candies = 0;
    let passes = 0;
    while (candies < n) {
        const currentCandies = m * w;
        // Check to see we are not done now
        if (candies + currentCandies > n) {
            passes++;
            break;
        }
        // If we can't purchase candies then see when we can
        if (candies + currentCandies < p) {
            const passesToNext = Math.ceil((p - candies) / currentCandies);
            const nextPossible = passes + passesToNext - 1;

            // Check that passes needed to purchase isnt farther out then just being
            // finished
            let nextPossibleFinished = Math.ceil((n - candies) / currentCandies);
            nextPossibleFinished = passes + nextPossibleFinished ;
            if (nextPossibleFinished < nextPossible) {
                return nextPossibleFinished;
            }

            // Set new candies and passes count and continue
            candies += (currentCandies * (nextPossible - passes));
            passes = nextPossible;
            continue;
        }

        passes++;

        // Get how many passes we still need if not making purchases
        const passesToFinishAsIs = Math.ceil((n - candies) / currentCandies) - 1;

        // Get how many passes we still need if we do make purchases
        // Note this is a greedy algorithm where we make the max purchase or none
        let mPossible = m;
        let wPossible = w;
        let candiesPossible = currentCandies + candies;
        let purchases = Math.floor(candiesPossible/p);
        candiesPossible = candiesPossible % p;
        if (mPossible === wPossible) {
            let halfPurchases = Math.ceil(purchases/2);
            wPossible += halfPurchases;
            mPossible += (purchases - halfPurchases);
        }
        else {
            let diff = Math.abs(wPossible - mPossible);
            let used = Math.min(diff, purchases);
            let purchased = purchases - used;
            let halfPurchases = Math.ceil(purchased/2);
            if (mPossible < wPossible) {
                mPossible += used;
                mPossible += halfPurchases;
                wPossible += (purchased - halfPurchases);
            } else {
                wPossible += used;
                wPossible += halfPurchases;
                mPossible += (purchased - halfPurchases);
            }
        } 
        const passesToFinishUpdated = Math.ceil((n - candiesPossible) / (mPossible * wPossible));
        
        // Now greedily update based on which is the currently fastest path
        if (passesToFinishUpdated <= passesToFinishAsIs) {
            candies = ((candies + currentCandies) - (purchases * p));
            m = mPossible;
            w = wPossible;
        } else {
            return passes + passesToFinishAsIs;
        }
    }
    return passes;
}

module.exports = minimumPasses;