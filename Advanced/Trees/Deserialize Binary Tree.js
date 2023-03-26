function test(A) {
    // console.log('A', A)
    let i = 0;
    function dfs() {
        if (A[i] === -1) {
            i++;
            return null;
        }
        else {
            let node = new TreeNode(A[i]);
            i++;
            node.left = dfs()
            node.right = dfs()

        }
    }
    return dfs()
}


console.log('-----', test());