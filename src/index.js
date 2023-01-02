// function test(A, B) {
//   function allocation(m) {
//     let stu = 1;
//     let currPage = 0;
//     for (let i = 0; i < n; i++) {
//       if (A[i] > m) return false;
//       if (currPage + A[i] > m) {
//         stu++;
//         if (stu > B) return false;
//         currPage = A[i];
//       } else {
//         currPage += A[i];
//       }
//     }
//     return true;
//   }

//   let res = Number.MAX_VALUE;
//   let n = A.length;
//   let l = 0;
//   let sum = 0;
//   for (let i = 0; i < n; i++) sum += A[i];
//   let h = sum;

//   if (n < B) return -1;
//   while (l <= h) {
//     let mid = Math.floor((h + l) / 2);
//     console.log("mid", mid);
//     if (allocation(mid)) {
//       res = Math.min(res, mid);
//       h = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }

//   return res;
// }

// // console.log(test([12, 34, 67, 90], 2));
// console.log(test([31, 14, 19, 75], 12));

// function isPossible(arr, n, m, curr_min) {
//   let studentsRequired = 1;
//   let curr_sum = 0;

//   // iterate over all books
//   for (let i = 0; i < n; i++) {
//     // check if current number of pages are greater
//     // than curr_min that means we will get the result
//     // after mid no. of pages
//     if (arr[i] > curr_min) return false;

//     // count how many students are required
//     // to distribute curr_min pages
//     if (curr_sum + arr[i] > curr_min) {
//       // increment student count
//       studentsRequired++;

//       // update curr_sum
//       curr_sum = arr[i];

//       // if students required becomes greater
//       // than given no. of students,return false
//       if (studentsRequired > m) return false;
//     }

//     // else update curr_sum
//     else curr_sum += arr[i];
//   }
//   return true;
// }

// // method to find minimum pages
// function findPages(arr, n, m) {
//   let sum = 0;

//   // return -1 if no. of books is less than
//   // no. of students
//   if (n < m) return -1;

//   // Count total number of pages
//   for (let i = 0; i < n; i++) sum += arr[i];

//   // initialize start as 0 pages and end as
//   // total pages
//   let start = 0,
//     end = sum;
//   let result = Number.MAX_VALUE;

//   // traverse until start <= end
//   while (start <= end) {
//     // check if it is possible to distribute
//     // books by using mid as current minimum
//     let mid = Math.floor((start + end) / 2);
//     console.log("mid R", mid);
//     if (isPossible(arr, n, m, mid)) {
//       // if yes then find the minimum distribution
//       result = Math.min(result, mid);

//       // as we are finding minimum and books
//       // are sorted so reduce end = mid -1
//       // that means
//       end = mid - 1;
//     }
//     // if not possible means pages should be
//     // increased so update start = mid + 1
//     else start = mid + 1;
//   }

//   // at-last return minimum no. of  pages
//   return result;
// }

// // let arr = [12, 34, 67, 90];
// // let m = 2;

// let arr = [31, 14, 19, 75];
// let m = 12;

// console.log(findPages(arr, arr.length, m));

