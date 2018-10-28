module.exports = function recursion(head) {
  const result = [];
  let level = 0;
  const func = (headNode) => {
    if (headNode !== undefined) {
      result[level] = result[level] || [];
      level += 1;
      func(headNode.left);
      func(headNode.right);
      level -= 1;
      result[level].push(headNode.value);
    }
  };
  func(head);
  return result;
};
