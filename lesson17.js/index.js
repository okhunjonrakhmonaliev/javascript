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
