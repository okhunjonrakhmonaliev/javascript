



let str1 = '#oxunjon#web#brain#'

console.log();

// =======================================

let str2 = "Oxunjon    "

console.log(str2.lengthendsWith('n' || 'N'));

// ==============================================

let str3 = "Web";
let str4 = "Brain";
let result1 = str3;
str3 = str4
str4 = result1

console.log(str3);

// =============================================

let str5 = "webBrain "
console.log(str5.repeat(10));
console.log(str5.replace("web","IT").repeat(10));

// ===================================================

let kabisa = 2023;
if (kabisa % 4 == 0){
    console.log("Kabisa yili");
} else {
    console.log("Kabisa yili emas");
}

// ===================================================

let teks = "#Oxunjon#web#Brain#";
let result2 = teks.replace("#","(").replace("#",")").replace("#","(").replace("#",")");
console.log(result2);



