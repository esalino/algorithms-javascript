const robotPathExists = require('../src/recursion/robotPath.js')

describe('robotPath()', () => {
    test('Find path exists', () => {
        const grid = [
            [0,0,0,0,0],
            [1,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,1],
            [0,0,0,0,0]
        ]
        const result = robotPathExists(grid, [0, 0], [grid.length - 1, grid[0].length - 1]);
        expect(result).toEqual(true);
    });

    test('Find path doesnt exist', () => {
        const grid = [
            [0,0,0,0,0],
            [1,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,1],
            [0,0,1,0,0]
        ]
        const result = robotPathExists(grid, [0, 0], [grid.length - 1, grid[0].length - 1]);
        expect(result).toEqual(false);
    })
})