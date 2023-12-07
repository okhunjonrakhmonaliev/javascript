let pair = "ABBACC";
let result = "";

for (let i = 0; i < pair.length; i++) {
  if (pair[i] === pair[i] -1) {
    result = result + pair[i];
  }
// console.log(pair[i]);
  
}

console.log(result);

// let toreverce = toArray.reverse();
// let toString = toreverce.join("");

// console.log(toString);
