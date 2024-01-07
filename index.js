console.log("started...");

let server = {
  id: 1,
  password: 9999,
  username: "Test",
};

let facebook = (pw, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.password === pw && server.username === username) {
        resolve("Welcome to Facebook");
      } else {
        reject("Login yoki Pw xato!!!");
      }
    }, 2000);
  });
};

async function getData() {
  try {
    let user = await facebook(9999, "Test");
    console.log(user);
    console.log("Finished...");
  } catch (err) {
    console.log(err);
  }
}

getData();
