let cars = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

// CRUD

// delete ====================================

// const deletemodel = (id) => {
//   let result = cars.filter((value) => value.id !== id);
//   cars = result;
// };

// deletemodel(3);
// console.log(cars);

// create ============================================

// const addcar = (model) => {
//   cars = [...cars, {  id: cars.length + 1, ...model }];
// };

// addcar({ year: 2020, engine: 2.5, name: "Palisade" });

// console.log(cars);

// updata ===========================================

// const UpDatamodel = (data) => {
//   let result = cars.map((value) =>
//     value.id === data.id ? { ...value, [data.type]: data.value } : value
//   );

//   cars = result;
// };

// UpDatamodel({ id: 5, type: "name", value: "ionic" });

// console.log(cars);

// =============================================

// Math =========================================

// begin1
let a = 10;
let P = 4 * a;
console.log(P);

// begin2

let a1 = 10;
// let s = ${a1 * a1};
let s = a1 * a1;
console.log(s);

// begin3

let a2 = 5;
let b = 4;
let S = a2 * b;
let P1 = 2 *(a2 + b);
console.log(P1);

// begin4
let d = 10;
let L = 3.14 * d;
console.log(L);

// begin5

let a3 = 5;
let V = a3 * a3 * a3;
let S1 = 6 * a3 * a3;
console.log(V);
console.log(S1);
