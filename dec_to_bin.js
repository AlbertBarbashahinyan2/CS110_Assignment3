let decNum = 20;
let binNum = '';
while(decNum >= 1) {
    binNum += decNum % 2;
    decNum = Math.floor(decNum / 2);
}
let result = '';
let index = binNum.length - 1;
while (index >= 0) {
    result += binNum[index];
    index--;
}
console.log(result);