const navegacion = document.querySelector('.navegacion');



// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children); // se van a mostrar los elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// // console.log(card.children[1].children[1].textContent);
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

// Traversing the Hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');