//simple javascriptconst character = "#";
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = ""

/* for (const row of rows) {
  console.log(result = result + row)
  } */

for (const row of rows) {
    result = result + row + "\n";
}
console.log(result);