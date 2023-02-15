

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.map((item, index) => {
    return (index % 2) ? item.reverse() : item;
  }).flat();
}
