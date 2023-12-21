// new Date();

// let d = new Date();

// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());


//////////////////////////////////////////////////////

// recursion(rucursive function);
// base condition

// function myRecurse(number) {
    
//     console.log(number);
//     let num = number - 1;
//     // base condition
//     if (num >= 5) {
//         myRecurse(num)
//     }
    
// }

// myRecurse(10);

// Map()/Set()/WeakMap()/WeakSet() => data structure

// new Set();

// const arr = [1, 1, 2, 2, 3, 4, 5];
// const set = new Set([1, 1, 1, 2, 2, 3, 4, 5]);
// const uniqueValue = [...set];

// console.log(uniqueValue);

// set ga malumot quwiw
// const set = new Set([1, 2, 3,]);
// set.add(100);
// set.add('Salom');
// set.add([1, 2, 3]);
// set.add({title: 'Webbrain'});

// console.log(set[0]); => set unordered qiymat saqlaydi, index mavjud emas!!!
// console.log(set);

// /////////////////////////////

// set dagi malumotni tekshirish
// const set = new Set([1, 2, 3,]);

// console.log(set.has(2));

// ////////////////////////////////

// set dan malumotni uchirish
// const set = new Set([1, 2, 3,]);
// set.delete(3);
// set.clear();
// console.log(set);

//////////////////////////////////////

// set da nechta malumot borligini tekshirish
// const set = new Set([1, 2, 3, 4]);
// let checkSize = set.size;

// console.log(checkSize);

// //////////////////////////////////////

// set qiymatlarini loop qilish
// let students = new Set();
// students.add('Jaloliddin')
//     .add('Sardorbek')
//     .add('Ohunjon');
///////////////////////////////
    
// for of()
// for (let name of students) {
//         console.log(name);
// }
//////////////////////////////

// forEach()
// students.forEach(name => {
//     console.log(name);
// })

//////////////////////////////////////////////////////////////

// WeakSet();

// let students = new WeakSet();
// let sardorbek = { name: 'Sardorbek' };
// students.add(sardorbek);

// console.log(students.has(sardorbek));

/////////////////////////////////////////////////////////////////


// new Map()
// let deviceColor = new Map();

// // map ga malumot qushish
// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');

// values, entries, keys
// console.log(deviceColor.keys());
// console.log(deviceColor.values());
// console.log(deviceColor.entries());

// map dan malumot ni uchirish
// deviceColor.delete('telefon');
// deviceColor.clear();
// console.log(deviceColor);

// map dan malumot olish
// let getValue1 = deviceColor.get('telefon');
// let getValue2 = deviceColor.get('laptop');

// console.log(getValue1);
// console.log(getValue2);
// console.log(deviceColor.size);

// ///////////////////////////////////////

// map qiymatlarini loop qilish
// let deviceColor = new Map();

// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');

// for (let entries of deviceColor) {
//     console.log(entries);
// }

// deviceColor.forEach((value, key, map) => {
//     // console.log(value);
//     // console.log(key);
//     console.log(map);
// })

/////////////////////////////////////////////////////

// object as a key in map

// let deviceColor = new Map();

// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');
// deviceColor.set({}, 'My key is object');

// console.log(deviceColor);


// WeakMap()

// let deviceColor = new WeakMap();

// deviceColor.set({}, 'qora');


// console.log(deviceColor);

// Hometask

// 1-getting sum of nested obj age
// 2-finding sum of n 
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]





// Hometask

// 1-getting sum of nested obj age
// 2-finding sum of n
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]

// let user = {
//     name: 'Test',
//     age: 30,
//     child: {
//         name: 'test',
//         age: 20,
//         child: {
//             name: 'test',
//             age: 10,
//             child: {
//                 age: 100
//             }
//         }
//     }
// }

// sum = 0;

// function getAge(obj) {
    
//     sum += obj.age; // 30 + 20 + 10
//     if (obj.child) {
//         getAge(obj.child);
//     }
    
// }

// getAge(user);
// console.log(sum);


//////////////////////////////////////////////////////////

// 2-finding sum of n
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15

// const findSum = (n) => {
    
//     if (n > 0) {
//         return n + findSum(n - 1)
//     } else {
//         return n
//     }
    
// }

// console.log(findSum(6));


/////////////////////////////////////////////

const findSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i
    }
    
    console.log(sum);
}

findSum(6);

//////////////////////////////////////////////////////////////
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]


// MODULE js
// Agar bitta faylda faqatgina bitta function yoki uzgaruvchi export qilmoqchi bulsak (export default nomi) qilib junatsak buladi, va import qilganda xoxlagan nom bilan tutib olamiz, gulli qavssiz
// Agar bitta faylda birdan oshiq function uzgaruvchilar bulsa, {nom1, nom2, nom3 ...} sifatida junatamiz, va import qilganda {} da bir xil nom bilan tutib olamiz.

/////////////////////////////////////////////////////////////////////////////////

// curry function

// non-curry version
// const add = (a, b, c) => {
//     return a + b + c
// }

// console.log(add(5, 5, 5));

///////////////////////////////////////////////////

// curry version

// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }

// console.log(add(5)(5)(5));

///////////////////////

// function sendRequest(greet){
//     return function (name) {
//         return function (message) {
//             return `${greet} ${name} ${message}`
//         }
//     }
// }

// console.log(sendRequest('Salom')('John')('Iltimos meni guruhga qushib quy!!!'));

///////////////////////////////////////////////////////////////

// Getter and Setter (get, set);

// const person = {
//     firstName : 'John',
//     lastName: 'Doe',
    
//     get fullName() {
//          return `${this.firstName} ${this.lastName}`
//     },
    
//     set fullName(value) {
//         this.firstName = value;
//     }
// }

// person.fullName = 'Obid Asomov';

// console.log(person.fullName);


// getter/setter => obj ichidagi metodni oddiy property sifatida chaqirish va tawqaridan turib usha function ni qiymatini uzgartirihs imkonini beradi(elatma!!! obj ichidagi function qiymati read only buladi, yani tawqaridan xech qanaqasiga qiymatni uzgartirib bulmaydi)
// getter => obj ichidagi functionni chaqirilganda oddiy property(key) sifatida chaqirishga imkon beradi
// setter => xar doim bitta parametr oladi, va uwa parametrda biz tawqarida berayotgan qiymat keladi va usha qiymatni function ga yangi qiymat sifatida set qilib

//////////////////////////////////////////////////////////////////////////////////////

// JSON => javascript object notation

// const companies = [
//     {
//         "name": "Wba",
//         "CEO": "Sardorbek Muhtorov"
//     },
    
//     {
//         "name": "Small Startup",
//         "CEO": null
//     }
// ]

// console.log(companies[1].name);

// let obj = { id: 1, name: 'Jaloliddin' };
// let toJson = JSON.stringify(obj); // to json
// let toObj = JSON.parse(toJson); // to object

// console.log(toObj);