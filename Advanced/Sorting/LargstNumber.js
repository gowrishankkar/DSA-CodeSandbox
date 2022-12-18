module.exports = {
    //param A : array of integers
    //return a strings
    largestNumber: function (A) {
        let str = ""
        A = A.sort((a, b) => {
            let n1 = Number('' + a + '' + b);
            let n2 = Number('' + b + '' + a);
            if (n1 > n2) {
                return -1
            }
            else return 1
        })
        let zero = 0
        for (let i = 0; i < A.length; i++) {
            if (A[i] == 0) {
                zero++ //to handle array case of all zeros [0,0,0,0]
            }
            str += A[i]
        }
        return zero == A.length ? 0 : str
    }
};
