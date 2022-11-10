function test(A) {

    let n = A.length;
    let max = Number.MIN_VALUE;
    // Find the max element in the array, so that we can find count of factor till that max element.
    for (let i = 0; i < n; i++) {
        max = Math.max(A[i], max);
    }

    //Create Count of Factors Array an initialize 2 to max element to 2
    let cof = [max + 1];
    cof[1] = 1;
    for (let i = 2; i <= max; i++) {
        cof[i] = 2;
    }
    console.log('cof', cof)

    //Count factors from 2 to max
    for (let i = 2; i <= max; i++) {
        for (let j = 2 * i; j <= max; j += i) {
            cof[j] = cof[j] + 1;
        }
    }

    console.log('cof', cof)
    //construct the ans array
    let ans = [n];
    for (let i = 0; i < n; i++) {
        ans[i] = cof[A[i]];
    }

    return ans;
}

console.log('test', test([8, 9, 10]))