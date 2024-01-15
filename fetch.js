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