let person = {
  id: 1,
  name: "Odil",
  age: 78,
  child: {
    id: 1,
    name: "Ali",
    age: 48,
    child: {
      id: 1,
      name: "Umar",
      age: 20,
    },
  },
};

let count = 0;

while (true) {
  if (person) {
    count = count + person.age
  }else {
    break
  }
  person = person.child
}

console.log(count);

// ============================

let arr = [
    {id: 1, name:"Oxunjon"},
    {id: 2, name:"Foziljon"},
    {id: 3, name:"Jaloliddin"},
    {id: 4, name:"O'tkirbek"}
]
const onSearch = (text) =>{
let arr1 = []
for (let i=0; i<arr.length; i++){
if (arr[i].name.includes(text.toLowerCase()) || arr[i].name.includes(text.toUpperCase()) ) {
    arr1.push(arr[i])
}
}
return arr1
}

console.log(onSearch("F"));