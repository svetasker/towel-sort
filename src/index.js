

module.exports = function towelSort (matrix) {
  if (!matrix) return new Array();
  return matrix.map((item, index) => {
    return (index % 2) ? item.reverse() : item;
  }).flat();
}
