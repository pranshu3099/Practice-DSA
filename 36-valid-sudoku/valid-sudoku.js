/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();

    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            let num = board[row][col];
            if(num === ".")continue;
            let rowKey = `${row} - ${num}`;
            let colKey = `${col} - ${num}`;
            let boxKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}-${num}`;

            if (
                rows.has(rowKey) ||
                cols.has(colKey) ||
                boxes.has(boxKey)
            ) {
                return false;
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }
    return true;
};