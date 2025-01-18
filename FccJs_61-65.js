//simple javascriptconst character = "#";
const character = "#";
const count = 8;
const rows = [];

//62
/* function padRow() {
  const test = "Testing";
  return test;
} */

//63
/* function padRow() {
    
} */

//64 öncesi
/* function padRow() {
    
} */

//65 oncesi
/* function padRow(rowNumber, rowCount) {
    
} */

//65
function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

//64 öncesi - bu adimda call decleration ve ilgili console-log silindi
/* const call = padRow();
console.log(call); */


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);