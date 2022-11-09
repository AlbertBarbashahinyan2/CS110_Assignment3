const n = 5;
let line = '';
let colCount = 0;
let lineCount = 0;

while (colCount < n) {
    line += '+';
    colCount++;
}
while (lineCount < n) {
    console.log(line);
    lineCount++;
}