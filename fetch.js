// fetching data from backend

async function getData() {
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        if (!response.ok) {
            throw new Error("404 saxifa topilmadi!")
        } else {
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
}

getData();


/////////////////////////////////////


// console.log('Started...');

// let server = {
//     id: 1,
//     password: 9999,
//     username: 'Test'
// }

// let facebook = (pw, username) => {
//     let user = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (server.password === pw && server.username === username) {
//                 resolve('Welcome to Facebook!!!')
//             } else {
//                 reject('Login yoki Pw xato!!!')
//             }
//         }, 2000)
//     })
    
//     user
//     .then((data) => {
//         console.log(data);
//         console.log('Finished...');
//     })
//     .catch(error => console.log(error))
// }

// facebook(9999, 'Tes');

// let result = "string" + 10;
// let result2 = Number ("test")
// console.log(typeof result2);

let result = String(5*5);
console.log( result);