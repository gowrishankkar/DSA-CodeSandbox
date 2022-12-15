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




function mergeSort(array) {
  // Write your code here.

  if(array.length <= 1) return array;
  const midIndex = Math.floor(array.length/2)
  const left = array.slice(0, midIndex)
  const right = array.slice(midIndex)
  return test(mergeSort(left), mergeSort(right))
  
}


function test(A, B){
   let length = A.length + B.length;
        let mergeArray = []
        let c = 0;
        let i = 0;
        let j = 0;
        while (i < A.length && j < B.length) {
            if (A[i] < B[j]) {
                mergeArray[c] = A[i];
                c++;
                i++;
            }
            else {
                mergeArray[c] = B[j];
                c++;
                j++;
            }
        }
        while (i < A.length) {
            mergeArray[c] = A[i];
            c++;
            i++;
        }
        while (j < B.length) {
            mergeArray[c] = B[j];
            c++;
            j++;
        }
        return mergeArray;
}
// Do not edit the line below.
exports.mergeSort = mergeSort;
