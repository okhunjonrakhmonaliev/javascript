// number
console.log(100 * 10);
console.log(typeof 500);

// string
console.log("hello");
console.log(typeof "hello");

// boolean
console.log(5 <= 5);
console.log(typeof Boolean(5));

// bigint10
console.log(999999999999999n + 15n);
console.log(typeof 999999999999999n + 10n);

// Symbol (false)
console.log(Symbol("text1") == Symbol("text1"));


// object
let user = { 
    name: "Oxunjon", 
    status: "student",
    age:27 
};
console.log(user.name);
console.log(user.status);
console.log(typeof user);


// array=> container (object)
let arr = [{name:"samsung"}, {name:"LG"}, 500,"hello", null, undefined];
console.log(arr[0]);
console.log(arr[3]);
console.log(typeof arr);


// function
function biinchiFunction() {
    console.log("hello g24 students");
}

biinchiFunction();
console.log(typeof biinchiFunction);