function add(A, B) {
  let res = "";
  let i = A.length - 1,
    j = B.length - 1;
  let sum,
    carry = 0;

  while (i >= 0 || j >= 0) {
    sum = carry;
    // console.log('sum 0', sum)
    if (i >= 0) sum += A[i] ;
    console.log('sum 1', sum)
    if (j >= 0) sum += B[j] ;
    console.log('sum 2', sum)
    res += (sum % 2).toString();
    console.log('res', res)
    carry = sum > 1 ? 1 : 0;
    i--;
    j--;
  }
  if (carry) res += carry.toString();
  return res.split("").reverse().join("").toString();
}

let A = "100010000000100";
let B = "11";

console.log("add",  '1' - '0', A.toString(2).split("1"));

let  asd = 4
console.log(asd & -asd)
