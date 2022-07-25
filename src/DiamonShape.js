// function diamond(a) {
//   let result = `*`.repeat(8).split("");
//   console.log("test  s2 sdasd", result);
//   let center = (a * 2) / 2;
//   let l = center - 1;
//   let r = center;
//   // console.log(result.join(""));
//   // for (let i = 1; i <= 2 * a; i++) {
//   //   if (l > 0 && r < 2 * a - 1) {
//   //     result[l] = " ";
//   //     result[r] = " ";
//   //     r++;
//   //     l--;
//   //     console.log(result.join(""));
//   //   }
//   // }
//   let result2 = `*`.repeat(8).split("");
//   console.log("testas dasd  s2", result2);
//   let newl = 1;
//   let newr = 2 * a - 2;

//   for (let i = 1; i <= 2 * a; i++) {
//     if (newr > 0 && newl < 2 * a - 1) {
//       result2[newl] = " ";
//       result2[newr] = " ";
//       newr--;
//       newl++;
//       // console.log("test ", result2);
//     }
//   }
//   // console.log("test", result2.join(""));
// }

diamond(4);

function diamond(N) {
  let length = 2 * N;
  let center = (N * 2) / 2;
  for (let i = 0; i < length; i++) {
    let result = [];
    for (let j = i; j < length; j++) {
      for (let i = i; i <= 2 * a; i++) {
        result.push(j);
      }
    }
    console.log("result", result);
  }
}
