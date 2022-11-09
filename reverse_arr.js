let arr = [5, 4, 3, 2, 1, 0];
for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);