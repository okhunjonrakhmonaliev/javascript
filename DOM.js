// DOM => document object model

// General overview
// console.log(window);
// console.log(document);
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.title = 'WBA');
// console.log(document.getElementById("title").innerHTML);

// //////////////////////////////////////////

// console.log(document.getElementById('title'));
// console.log(document.getElementById('title').innerHTML);

// ///////////////////////////////////////////////
// js implementtion (domda id,class va tag namelar orali elementlarni tanlab olish)

// const title = document.getElementById("title");
// const title = document.getElementsByClassName("title");
// const title = document.getElementsByTagName("h1");

/////////////////////////////////////////////////
// general => querySelectors()

// querySelector
// const general = document.querySelector('#title');
// const general = document.querySelector('.text');
// const general = document.querySelector('h1');

/////////////////////////////////////////////////////

// querySelectorAll
// const general = document.querySelectorAll('#title');
// const general = document.querySelectorAll('.text');
// const general = document.querySelectorAll('h1');

/////////////////////////////////////////////////////

// const title = document.querySelector("h1");
// title.innerHTML = "dom mavzusi";
// title.style.background = "yellow"

////////////////////////////////////////////////
// children

const ol = document.querySelector("ol");

for (let i = 0; i < ol.children.length; i++) {
  if (i % 2 === 0) ol.children[i].style.background = "green"
  else ol.children[i].style.background = "red";
}

// console.log(title);

/////////////////////////////////////////////////////

// const title = document.querySelector('h1');
// const btn = document.querySelector('#btn');
// let isActive = true;

// const onChange = () => {
    
//     isActive ? (
//       title.style.cssText = `
//       background: red;
//       color: yellow;
//       transition: all 1s linear;
//     `
//     ) : (
//       title.style.cssText = `
//       background: white;
//       color: black;
//       transition: all 1s linear;
//     `
//     )
    
//     isActive = !isActive
// }

// btn.addEventListener('click', onChange);

