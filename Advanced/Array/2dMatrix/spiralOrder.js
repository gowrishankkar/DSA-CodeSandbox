var spiralOrder = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let r0 = 0, r1 = n - 1, c0 = 0, c1 = m - 1;
    let res = []
    while(r0 <= r1 && c0 <= c1){
        for(let c = c0; c <= c1 ; c++) res.push(matrix[r0][c])
        ++r0;
        for(let r = r0; r <= r1 ; r++) res.push(matrix[r][c1])
        --c1;
        for(let c = c1; c >= c0 ; c--) res.push(matrix[r1][c])
        --r1;
        for(let r = r1; r >= r0 ; r--) res.push(matrix[r][c0])
        ++c0;
 
    }
    return res
};
let data = spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
console.log('data', data)