function test(A){
    // let n = A
    //     const count = Math.pow(2, n);
    //     const res = [], i = 0;
    //     for (let i = 0; i < count; i++) {

    //         res[i] = i ^ (i >> 1);
    //         console.log(i, res)
    //     }
    //     return res;

    let ans = 0
     for (let i = 0; i < A.length; i++) {

           ans = ans ^ A[i]
            console.log(i, ans)
        }
        return ans
}

test([6,9,6,10,9])
