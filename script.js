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
