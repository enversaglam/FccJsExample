//simple javascriptconst character = "#";
const character = "#";
const count = 8;
const rows = [];

//önceki durum
/* function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
} */

//68
/* function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " ";
} */

//69
/* function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
} */

//70
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber*2-1) + " ".repeat(rowCount - rowNumber);
}

//66 oncesi
/* for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
} */
//66
/* for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow());
} */

//67
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow( i + 1 , count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);