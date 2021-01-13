function robotPathExists(grid, startPoint, endPoint) {
    const visited = new Array(grid.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = (new Array(grid[0].length)).fill();
    }
    return findPath(grid, startPoint, endPoint, visited);
}

function findPath(grid, currentPoint, endPoint, visited) {
    if (!isInBounds(grid, currentPoint) || visited[currentPoint[0]][currentPoint[1]]
        || grid[currentPoint[0]][currentPoint[1]]) {
        return false;
    }
    if (currentPoint[0] === endPoint[0] && currentPoint[1] === endPoint[1]) {
        return true;
    }
    visited[currentPoint[0]][currentPoint[1]] = 1;
    let found = findPath(grid, [currentPoint[0], currentPoint[1] + 1], endPoint, visited);
    if (!found) {
        found = findPath(grid, [currentPoint[0] + 1, currentPoint[1]], endPoint, visited);
    }
    if (!found) {
        found = findPath(grid, [currentPoint[0], currentPoint[1] - 1], endPoint, visited);
    }
    if (!found) {
        found = findPath(grid, [currentPoint[0] - 1, currentPoint[1]], endPoint, visited);
    }
    return found;
}

function isInBounds(grid, currentPoint) {
    return currentPoint[0] >= 0 && currentPoint[0] < grid.length && currentPoint[1] >= 0 && currentPoint[1] < grid[0].length;
}

module.exports = robotPathExists;