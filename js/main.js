// Acceso a elementos del dom

// Por su atributo id

let mainTitle = document.getElementById('main-title');

mainTitle.style.color = 'crimson';

console.log(mainTitle.style);

// Por su clase CSS

let importants = document.getElementsByClassName('important');

console.log(importants);

for (i = 0; i < importants.length; i++) {
    importants[i].style.color = 'white';
    importants[i].style.backgroundColor = 'brown';
    importants[i].style.padding = '20px';
}