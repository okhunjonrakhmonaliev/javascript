// let myMathpow = (son, daraja) => {
//     return son ** daraja
// }
// console.log(myMathpow(5,2));

// =========================================

// let myMathsqrt = (son) => son ** 0.5
// console.log(myMathsqrt (64));

// ==========================================

// let myMathcbrt = (son) => son ** (1 / 3);
// console.log(myMathcbrt(64).toFixed());

// ==========================================

// let myMathabs = (son) => {
//     son < 0 && console.log(son * -1);
//     son > 0 && console.log(son);
// }
// myMathabs(100);

// =============================================

// let myMathfloor = (son) => {
//     return parseInt(son)
// }
// console.log(myMathfloor (15.5));

// =====================================

// function oxunjonround(son) {
//   son >= parseInt(son) + 0.5 && console.log(parseInt(son) + 1);
//   son < parseInt(son) + 0.5 && console.log(parseInt(son));
// }
// oxunjonround(5.6);

// function fozilround(son) {
//   son >= parseInt(son) + 0.5 && console.log(parseInt(son) + 1);
//   son < parseInt(son) + 0.5 && console.log(parseInt(son));
// }
// fozilround(6.6);

function oxunjonCeil(son) {
  return son > parseInt(son) && parseInt(son) + 1;
}
console.log(oxunjonCeil(15.9999));
