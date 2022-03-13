let arr = Array.from({length : 10}, ()=> 0);
console.log(arr)
for (let i = 0; i < 10; i += 1) {
    arr[i] = i;
}
console.log(arr)
/*
[
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
]
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
]
*/
