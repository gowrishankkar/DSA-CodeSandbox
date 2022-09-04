// Problem Description
// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.

// Input 1:
// A = [1, 2, 3]

module.exports = {
    //param A : array of integers
    //return a long integers
    subarraySum: function (A) {

        //Sum of All Subarrays
        
        let arr = A;
        let n = arr.length
        let result = 0
        for (let i = 0; i < n; i++) {
            result += (Number(BigInt(arr[i])) *
                (i + 1) * (n - i));
        }
        console.log('result', result)
        return result
    }
};
