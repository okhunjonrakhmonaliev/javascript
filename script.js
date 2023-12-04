// let obj = {
//     id : 1,
//     name : "WebBrain"
// }

// for (let key in obj){
//     console.log(key);
// }

// =============================

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let key in obj) {
//   if(typeof obj[key] === "number") {
//       console.log(key);
//   };

// }

// ======================================

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// newobj = {};
// for (let key in obj) {
//   if (typeof obj[key] === "boolean") {
//     newobj[key] = obj[key];
//   }
// }

// console.log(newobj);

// ==========================================

person = {
    id:1,
    name:"Oxunjon",
surname:"Rakhmonaliev",
ielts:5.5,
student:true,
parol:101
}

function kirish (parol,name){
parol === 101 && name === "Oxunjon" ? console.log("hush kelibsiz"):console.log("parol yoki name xato");
}

kirish (102,"Oxunjon")