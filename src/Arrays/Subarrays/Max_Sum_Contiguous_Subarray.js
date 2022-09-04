// Problem Description
// Find the contiguous non-empty subarray within an array, A of length N, with the largest sum.


// Input 1:

//  A = [1, 2, 3, 4, -10] 

module.exports = {
    //param A : array of integers
    //return an integer
    maxSubArray: function (A) {

        let arr = A;
        let currentSum = arr[0]
        let result = currentSum;
        for (let i = 1; i < arr.length; i++){
            currentSum = Math.max(currentSum + arr[i], arr[i])
            result = Math.max(currentSum, result)
        }
        return result
        console.log('currentSum', currentSum, result)
    }
};
