function test(A) {
    A.sort((a, b) => a - b);
    let count = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] < A[i]) {
            continue;
        } else {
            count += A[i - 1] + 1 - A[i];
            A[i] += A[i - 1] + 1 - A[i];
        }
    }
    return count;
}