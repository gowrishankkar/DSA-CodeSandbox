function  test(A) {
    A = [...new Set(A)];
    // sort the array
    A.sort((a, b) => a - b);
    // If all the elements are same then no matter which indices we choose, the answer will always be 0
    if (A.length <= 1)
        return 0;
    // Otherwise the answer is the second maximum value of the set
    return A[A.length - 2];
}