//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
function makeAnagram(a, b) {
    let deletions = 0;
    const mapA = {};
	const mapB = {};
	
	// fill mapA with character counts
    for (let i in a) {
        const n = mapA[a[i]] ? mapA[a[i]] + 1 : 1;
        mapA[a[i]] = n;
	}
	
	// fill mapB with character counts as well as looking for characters
    // in 'b' that don't exist in 'a'
    for (let i in b) {
        const n = mapB[b[i]] ? mapB[b[i]] + 1 : 1;
		mapB[b[i]] = n;
		// if MapA does not have the char then we would need to delete
        // this char so increment deletions
        if (!mapA[b[i]]) {
            deletions++;
            continue;
		}
		// There is a match so decrement mapA count
        mapA[b[i]] = mapA[b[i]] - 1;
	}
	
	// Go back through mapA to look for characters that don't exist in b
    for (let i in a) {
        if (!mapB[a[i]]) {
            deletions++;
            continue;
		}
		// There is a match so decrement mapB count
        mapB[a[i]] = mapB[a[i]] - 1;
    }
    return deletions;
}

module.exports = makeAnagram;