// let res = 0;
// const sum = (n) => {
//   if (n === 1) return (res = res + 1);
//   else {
//     res += n;
//     return sum(n - 1);
//   }
// };

// sum(4);

// // console.log(res);

// let arr = ["foziljon","oxunjon","jaloliddin aka","o'tkirbek","shuxrat","madina","sardor"]

// // console.log(arr.slice(2,3));
// console.log(arr.splice(3,4));

// let arr = [20, 35, 10, 5, 65, 100];

// let filtered = arr.filter((value, index) => value < 50);
// console.log(filtered);



let str = "4376";
let sum = 0;
for(let i=0; i<str.length; i++){
    sum += +str[i]

}
console.log(sum);