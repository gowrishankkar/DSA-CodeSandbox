// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// var deserialize = function (data) {
//   const isBaseCase = !data.length;
//   if (isBaseCase) return null;

//   const val = data.shift();

//   const isNull = val === null || val === -1;
//   if (isNull) return null;

//   return dfsDeserialize(val, data);
// };

// const dfsDeserialize = (val, data) => {
//   const node = new TreeNode(val);

//   node.left = deserialize(data);
//   node.right = deserialize(data);

//   return node;
// };

// const data = deserialize([9, 1, 2, -1, 3, 4, -1, -1, -1, -1]);
// console.log("data", data);



// const elementsCount = {}

// hobbies.forEach((element) =>{
//   if(elementsCount[element]){
//     elementsCount[element] = elementsCount[element] + 1 
//   } else {
//     elementsCount[element] = 1
//   }
// })




function subsetSum( a,  n, sum)
{
    // Initializing the matrix
    var tab = new Array(n + 1);
    for (let i = 0; i< n+1; i++)
      tab[i] = new Array(sum + 1);
  // Initializing the first value of matrix
    tab[0][0] = 1;
    for (let i = 1; i <= sum; i++)
        tab[0][i] = 0;
 
    for (let i = 1; i <= n; i++)
    {
        for (let j = 0; j <= sum; j++)
        {
          // if the value is greater than the sum
            if (a[i - 1] > j)
                tab[i][j] = tab[i - 1][j];
            else
            {
                tab[i][j] = tab[i - 1][j] + tab[i - 1][j - a[i - 1]];
            }
        }
    }
 
 console.log('tab', tab)
    return tab[n][sum];
}
 
var n = 6;
var a = new Array(2,3,5,6,8,10);
var sum = 10;
 
console.log(subsetSum(a, n, sum));