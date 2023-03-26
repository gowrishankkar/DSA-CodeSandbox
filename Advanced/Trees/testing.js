var serialize = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return [ null ];

    return dfsSerializeIterative([ root ]);
};

const dfsSerializeIterative = (stack, result = []) => {
    while (stack.length) {
        const curr = stack.pop();

        const isNull = curr === null;
        if (isNull) {
            result.push(null);
            continue;
        }

        result.push(curr.val);
        stack.push(curr.right);
        stack.push(curr.left);
    }

    return result;
}