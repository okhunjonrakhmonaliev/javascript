// let user = {
// }

// user.name = "John",
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// ================================

// let schedule = {name:"oxunjon"};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(schedule));

// =====================================

// let salaries = {
//     John: 100,
//     Ann: 150,
//     Pete: 200
// }

// let sum = 0;

// for (let kalit in salaries) {
//     sum += salaries[kalit]
// }

// console.log(sum);

// ========================================

let menu = {
    width: 200,
    height: 300,
    title: "WBA"

}

let multiplyNumeric = (obj) => {
    // console.log(obj);
    for (let kalit in obj){
        // console.log(obj[kalit]);
        if (typeof obj[kalit] === "number"){
            obj[kalit] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu);.

===============================================



