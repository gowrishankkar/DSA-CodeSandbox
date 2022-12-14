function (A, B) {

    let C = []
    let i = 0
    let j = 0
    let k = 0;
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            C[k] = A[i]
            i++;
            k++
        } else {
            C[k] = B[j]
            j++;
            k++
        }
    }
    while (i < A.length) {
        C[k] = A[i]
        i++;
        k++
    }
    while (j < B.length) {
        C[k] = B[j]
        j++;
        k++
    }
    // console.log('C', C)
    return C;
}