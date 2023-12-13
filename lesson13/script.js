// let pair = "ABBACC";
// let result = "";

// =========================================================

// let arr = [1,[3,[5]],[10]];

// let nestArray = arr.flat(Infinity);

// let sum = nestArray.reduce((total, currentValue) => total + currentValue);

// console.log(sum);

// ============================================================

let cars = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 17, year: 2018, engine: 2.4, name: "Tracker" },
];

// let result = cars.filter((value) => value.year < 2000);
// let result = cars.filter((value) => value.year < 2000);
// let result = cars.sort((a,b) => a.engine - b.engine);
// let result = cars.sort((a, b) => a.year -b.year);
let result = cars.sort((a,b) => a.name.localeCompare(b.name));

console.log(result);



// Array advanced part

//1

// let obj = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age: 20,
//             child: {
//                 age: 100
//             }
//         }
//     }
// }

// let sum = 0;
// while (true) {
//     if (obj) {
//         // console.log(obj.age);
//         sum += obj.age
//     } else {
//         break
//     }
//     obj = obj.child
// }

// console.log(sum);


////////////////////////////////////////////

//2

// let arr = [
//     {id: 1, name: 'Foziljon'},
//     {id: 2, name: 'Mirshakar'},
//     {id: 3, name: 'Jaloliddin'},
//     {id: 4, name: 'Shuxratbek'},
// ]

// const onSearch = (input) => {
//     let natija = [];
    
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].name.toLowerCase().includes(input.toLowerCase())) {
//             natija.push(arr[i])
//         }
//     }
    
//     console.log(natija);
// }

// onSearch('S');

// Array advanced part

// sort by number

// let arr = [2, 4, 1, 5,  1000, 3, 100, 100, 20,];

// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

// console.log(arr.sort((a, b) => {
//     return a - b
// } ));

// console.log(arr.sort(function (a, b) {
//     return a - b
// }));


// sort by letter

// let arr = ['c', 'b', 'a', 'd', 'A', 'C', 'B'];

// console.log(arr.sort((birinchi, ikkinchi) => birinchi.localeCompare(ikkinchi)));
// console.log(arr.sort((birinchi, ikkinchi) => ikkinchi.localeCompare(birinchi)));
// console.log(arr.sort((a, b) => a - b));

// ////////////////////////////////////

// let str = 'WBA';

// terminal => ABW

// let toArray = str.split('');
// let toReverse = toArray.reverse();
// let toString = toReverse.join("");

// let general = str.split("").reverse().join("");

// console.log(general);

////////////////////////////////

// let num = 21543723;

// console.log( typeof +num.toString().split("").sort().join(""));

///////////////////////////////////////////////////////////////////////

// map()

// let arr = ['Foziljon', 'Mirshakar', 'Jaloliddin'];

// arr.map(function(){})

// arr.map((value, index, array) => {
//     // console.log(qiymat);
//     // console.log(index);
//     // console.log(array);
// })

// let str = 'WBA';

// for (let i = 0; i < str.length; i++){
    // console.log(str[i]);
    // console.log(i);
    // console.log(str);
// }

// str[i] = value
// i = index
// str = array

// //////////////////

// forEach()
// let arr = ['Foziljon', 'Mirshakar', 'Jaloliddin'];

// arr.forEach((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
// })

//////////////////////////////////
// map() vs forEach()

// let arr = ['Foziljon', 'Mirshakar', 'Jaloliddin'];

// let newArr = arr.map((value, index) => {
//     return 'Hello World!'
// })

// let newArr = arr.forEach((value, index) => {
//     // console.log(value);
// })

// console.log(newArr);

///////////////////////////////////////////

filter()

let arr = [20, 10, 35, 60, 73, 85];
let arr1 = ['Foziljon', 'Mirshakar', 'Jaloliddin'];


let filtered = arr.filter((value, index) => value !== 'Foziljon');
console.log(filtered);

let filtered1 = arr.filter((value, index) => value < 50);

let newArr = [];
arr.map((value) => {
    if (value < 50) {
        // console.log(value);
        newArr.push(value)
    }
})

// console.log(newArr);

// let str = 'ABBACC';

// let arr = [1[3[5]][10]];
// terminal => 18














