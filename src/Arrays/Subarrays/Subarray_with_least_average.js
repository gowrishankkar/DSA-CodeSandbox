// Problem Description
// Given an array of size N, fi
// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3

module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let arr = A;
        let n = arr.length
        let minIndex = 0;

        // console.log('B', B)
        let currentSum = 0
        for (let j = 0; j < n; j++) {
            currentSum += arr[j]

        }
        let min = currentSum
        for (let i = 1; i <= n - B; i++) {
            currentSum = currentSum + arr[i + B - 1] - arr[i-1]
            if (currentSum < min) {
                min = currentSum
                minIndex = i  
            }
        }

        return minIndex
        console.log(minIndex)
    }
};
