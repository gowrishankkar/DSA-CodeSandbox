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



const merge=(left,right)=>{
    let res=[],l=0,r=0,i=0;

    while(l<left.length && r<right.length){
        if(left[l] <= right[r])res[i++]=left[l++];
        else res[i++]=right[r++];
    }

    return res.concat(left.slice(l),right.slice(r));
}

const mergeSort = (nums,l,r)=>{
    if(l===r-1)return [nums[l]];

    let mid=(l+r)/2|0;

    let left=mergeSort(nums,l,mid);
    let right=mergeSort(nums,mid,r);

    return merge(left,right);
}
var sortArray = function(nums) {
    return mergeSort(nums,0,nums.length);
};