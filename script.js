// "use strict"

// let numb = 7;
// numb % 2 == 0 && console.log("Juft son");
// numb % 2 != 0 && console.log("Toq son");

// // if
// if (numb%2==0) {
//     console.log("Juft son boladi");
// } else {
//     console.log("Toq son boladi");
// }

// // ternary (?)
// numb % 2 == 0 ? console.log("Juft son chiqdi") : console.log("Toq son chiqdi");;

// // =============================================================
// let ball = 88;

// ball<=100 && ball>=86 && console.log("A");
// ball<=85 && ball>=61 && console.log("B");
// ball<=60 && ball>=50 && console.log("C");
// ball<50 && console.log("Failed");

// // if
// if (ball<=100 && ball>=86) {
//   console.log("A degree");
// } else if (ball<=85 && ball>=61)  {
//   console.log("B degree");
// } else if (ball<=60 && ball>=50)  {
//     console.log("C degree");
// } else {
//     console.log("Failed");
// }

// // ========================================================

// let meva="olma";

// meva==="olma" && console.log("10000");
// meva==="nok" && console.log("12000");
// meva==="tarvuz" && console.log("20000");
// meva!=="olma" && meva!=="nok" && meva!=="tarvuz" && console.log("bunday meva yuq");

// // if
// if (meva==="olma") {
//     console.log("10000sum");
// } else if (meva==="nok") {
//     console.log("12000sum");
// } else if (meva==="tarvuz") {
//     console.log("20000sum");
// } else {
//     console.log("bunday meva qolmagan edi");
// }

// // switch/case
// switch (meva) {
//     case "olma" : console.log( "1kg 10000" );break
//     case "nok" : console.log("1kg 12000");break
//     case "tarvuz" : console.log("1kg 20000");break
//     default : console.log("bunday meva yuq edi ertaga olib kelamiz");
// }

// // ==================================================================

// let bolin=7

// bolin % 3 == 0 && console.log("3ga bolinadi");
// bolin % 5 == 0 && console.log("5ga bolinadi");
// // bolinuvchi % 3 == 0 && bolinuvchi % 5 == 0 && console.log("3ga va 5ga bolinadi");

// // if
// if (bolin % 3 ==0 && bolin % 5 ==0) {
//     console.log("3ga va 5ga bolinadi va qoldiq qolmaydi");
// } else if (bolin % 3 ==0) {
//     console.log("3ga bolinadi va qoldiq qolmaydi");
// } else if (bolin % 5 ==0) {
//     console.log("5ga bolinadi va qoldiq qolmaydi");
// } else { console.log("3ga ham 5ga ham bolinmaydi");}

// // ===========================================================

// let browser="Safari"

// if (browser=="Edge") {
//     console.log("You've got the Edge!");
// } else if (browser=="Chrome"){

// } else if (browser=="Firefox"){

// } else if (browser=="Safari"){

// } else if (browser=="Opera"){
//     console.log("Okay we support these browsers too");
// }else{
//     console.log("We hope that this page looks ok!");
// }

// // ======================================================

// let login="Employee"

// if (login=="Employee") {
//     console.log("Hello");
// }else if (login=="Director") {
//     console.log("Greetings");
// }else if (login=="") {
//     console.log("No login");
// }else {
//     console.log("Failed");
// }

// for loop

for (let i = 1; i <= 10; i++) {
  i % 2 === 0 ? console.log(i, "Juft son") : console.log(i, "Toq son");
}

// ================================================

let str = "WebBrainAcadAmya";

let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === "a" || (str[i]=== "A")) {
    result += str[i]
  }
}

console.log("A,a-", result.length);

// ============================================

// count

let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || (str[i]=== "A")) {
      count++
    }
  }

  console.log("A,a-", count);

//   ============================================

let bigletter  ="WeBbraIN";
let horizontal = "";

for (let i = 0; i < bigletter.length; i++) {

    if (bigletter[i] === bigletter[i].toUpperCase ()) {
      //  console.log(bigletter[i]);
      horizontal += bigletter[i]
    }
}

console.log(horizontal);


let reverse = "oxunjon";

let result1 = "";

for(let i = reverse.length -1; i>=0; i--) {
  // console.log(reverse[i]);
  result1 += reverse[i]
}

console.log(result1);