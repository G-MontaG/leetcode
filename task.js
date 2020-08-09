function solution(A, K) {
  const maxNumberLength = Math.max(...A).toString().length;
  const numberOfRows = Math.round(A.length / K);
  let tableOutput = "";
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const isFirstRow = rowIndex === 0;
    let topBorder = isFirstRow ? "+" : "";
    let cells = "|";
    let bottomBorder = "+";
    A.slice(rowIndex * K, rowIndex * K + K).forEach((number) => {
      const numberOfSpaces = maxNumberLength - number.toString().length;
      if (isFirstRow) {
        topBorder = topBorder + "-".repeat(maxNumberLength) + "+";
      }
      cells = cells + " ".repeat(numberOfSpaces) + number + "|";
      bottomBorder = bottomBorder + "-".repeat(maxNumberLength) + "+";
    });
    if (isFirstRow) {
      tableOutput =
        tableOutput +
        `
      ${topBorder}
      ${cells}
      ${bottomBorder}`;
    } else {
      tableOutput =
        tableOutput +
        `
      ${cells}
      ${bottomBorder}`;
    }
  }
  return tableOutput;
}

console.log(solution([4], 4));

console.log(solution([1234], 1));

console.log(solution([4, 35, 80, 123], 4));

console.log(solution([4, 35, 80, 123, 1234, 44, 8, 5, 24, 3, 22, 35], 4));

console.log(solution([4, 35, 80, 123, 1234, 44, 8, 5, 24, 3], 4));
