


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