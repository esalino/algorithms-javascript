let preSelectedIndexes = [];

let availableRows = [];
let availableCols = [];
let availableBoxes = [];
/**
* @param {character[][]} board
* @return {void} Do not return anything, modify board in-place instead.
*/
var solveSudoku = function (board) {
    preSelectedIndexes = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]]

    availableRows = [new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])];
    availableCols = [new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])];
    availableBoxes = [[new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])], [new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])], [new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]), new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])]];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const pre = board[i][j];
            if (pre !== ".") {
                preSelectedIndexes[i][j] = true;

                availableRows[i].delete(pre);
                availableCols[j].delete(pre);
                availableBoxes[getSubBoxIndex(i)][getSubBoxIndex(j)].delete(pre);
            }
        }
    }
    solveBoard(board, 0, 0);

};

var solveBoard = function (board, i, j) {
    if (preSelectedIndexes[i][j]) {
        if (j === 8) {
            if (i === 8) {
                return true;
            }
            return solveBoard(board, i + 1, 0);
        }
        return solveBoard(board, i, j + 1);
    }
    const available = getAvailable(i, j);
    if (available.length === 0) {
        return false;
    }
    for (let k = 0; k < available.length; k++) {
        const num = available[k];
        board[i][j] = num;
        availableRows[i].delete(num);
        availableCols[j].delete(num);
        availableBoxes[getSubBoxIndex(i)][getSubBoxIndex(j)].delete(num);
        if (i === 8 && j === 8) {
            return true;
        }
        let result = false;
        if (j < 8) {
            result = solveBoard(board, i, j + 1);
        } else if (i < 8) {
            result = solveBoard(board, i + 1, 0);
        }
        if (result) {
            return true;
        }
        if (!result) {
            board[i][j] = ".";
            availableRows[i].add(num);
            availableCols[j].add(num);
            availableBoxes[getSubBoxIndex(i)][getSubBoxIndex(j)].add(num);
        }
    }

}

var getSubBoxIndex = function (i) {
    if (i < 3) {
        return 0;
    } else if (i < 6) {
        return 1;
    }
    return 2;
}

var getAvailable = function (i, j) {
    const available = [];
    const availableSet = availableRows[i];
    const boxI = getSubBoxIndex(i);
    const boxJ = getSubBoxIndex(j);
    for (const item of availableSet) {
        if (availableCols[j].has(item) && availableBoxes[boxI][boxJ].has(item)) {
            available.push(item);
        }
    }
    available.sort();
    return available;
}

module.exports = solveSudoku;
