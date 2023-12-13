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

const UpDatamodel = (data) => {
  let result = cars.map((value) =>
    value.id === data.id ? { ...value, [data.type]: data.value } : value
  );

  cars = result;
};

UpDatamodel({ id: 5, type: "name", value: "ionic" });

console.log(cars);
