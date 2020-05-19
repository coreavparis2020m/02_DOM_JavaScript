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

// Por su etiqueta

let links = document.getElementsByTagName('a');

for (i = 0; i < links.length; i++) {
    links[i].style.textDecoration = 'none';
    links[i].style.color = 'brown';
}

// Por cualquier selector incluyendo combinaciones

let fruits = document.querySelectorAll('.fruits li');

console.log(fruits[0].innerText);

for (i = 0; i < fruits.length; i++) {
    if (fruits[i].innerText === 'Naranjas') {
        fruits[i].style.color = 'orange'
    }
    if (fruits[i].innerText === 'Peras') {
        fruits[i].style.color = 'green'
    }
    if (fruits[i].innerText === 'Manzanas') {
        fruits[i].style.color = 'gold'
    }
}

// Acceso a ascendientes/descendientes

let fruitsList = document.querySelectorAll('.fruits');

let fruitsElements = fruitsList[0].children;  // Propiedad que devuelve los hijos de un nodo

console.log(fruitsElements);

let volkswagenElement = document.getElementById('vw');

let vehicles = volkswagenElement.parentElement; // Propiedad que devuelve el elemento padre de un nodo

console.log(vehicles);

// Crear y añadir elementos en el DOM

let newBrand = document.createElement('p');  // Crea elemento en el dom pasándole la etiqueta

newBrand.innerHTML = 'Ferrari';

// vehicles.appendChild(newBrand); Añade un elemento como hijo al final

vehicles.insertBefore(newBrand, volkswagenElement); // Añade el primer parámetro como hijo delante del segundo parámetro