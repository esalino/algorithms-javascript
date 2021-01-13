const lineByLine = require('n-readlines');
const solve = require('../src/search/mrXAndHisShots.js')

describe('mrXAndHisShots()', () => {
    test('Find shots A', () => {
        const liner = new lineByLine('tests/mrXAndHisShotsDataA.txt');
        let line = liner.next();
        const split = line.toString('ascii').split(' ');
        const shotsCount = parseInt(split[0]);
        const playersCount = parseInt(split[1]);
        const shots = [];
        const players = [];
        for (let i = 0; i < shotsCount; i++) {
            shots[i] = liner.next().toString('ascii').split(' ').map(shotsTemp => parseInt(shotsTemp, 10));
        }
        for (let i = 0; i < playersCount; i++) {
            players[i] = liner.next().toString('ascii').split(' ').map(shotsTemp => parseInt(shotsTemp, 10));
        }
        const result = solve(shots, players);
        expect(result).toBe(1621);
    });
});
