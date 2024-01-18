console.log('Started...');

let server = {
    id: 1,
    password: 9999,
    username: 'Test'
}

let facebook = (pw, username) => {
    let user = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (server.password === pw && server.username === username) {
                resolve('Welcome to Facebook!!!')
            } else {
                reject('Login yoki Pw xato!!!')
            }
        }, 2000)
    })
    
    user
    .then((data) => {
        console.log(data);
        console.log('Finished...');
    })
    .catch(error => console.log(error))
}

facebook(9999, 'Tes');