

module.exports = function towelSort (matrix) {
  if (!matrix) return new Array();
  return matrix.map((item, index) => {
      //создаем новый массив, в котором каждый четный элемент записывается в обратном порядке
    return (index % 2) ? item.reverse() : item;
  }).flat();
}
