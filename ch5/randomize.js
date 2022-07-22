const print = arr => {
  let ret = ""
  for (let a of arr) {
    ret += a + ' '
  }
  console.log(ret)
}
const randomize = (arr) => {
  const n = arr.length
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
randomize(arr);
print(arr) 