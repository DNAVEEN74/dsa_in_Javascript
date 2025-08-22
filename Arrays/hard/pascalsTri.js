// Given an integer numRows, return the first numRows of Pascal's triangle.

//GIVEN ROW AND COLUM NUMBER FIND THE ELEMENT AT THAT PLACE IN THE PASCALS TRIANGLE

function ncr (n, r) {
    let res = 1;

    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }

    return res;
}

// GIVEN ROW NUMBER PRINT ALL ELEMENTS IN THE ROW
//BRUTE FORCE
// function printRow(r) {
//     let row = [];
//     let res = 1;
//     row.push(res);

//     for (let i = 1; i <= r; i++) {
//         res = ncr(r, i);
//         row.push(res);
//     }

//     return row;
// }

//OPTIMAL APPROACH
function printRow(r) {
    let row = [];
    let res = 1;
    row.push(res);

    for (let i = 1; i < r; i++) {
        res = res * (r - i);
        res = res / (i);
        row.push(res);
    }

    return row;
}


// PRINT PASCALS TRIANGLE, N IS GIVEN
function printPascalsTriangle (n) {
    let pasTri = [];
    for ( let i = 1; i <= n; i++) {
        let res = printRow(i);
        pasTri.push(res);
    }

    return pasTri;
}

console.log(printPascalsTriangle(5));