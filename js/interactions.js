// Interacción con los elementos del DOM

// Atributos

let sexSelect = document.getElementById('sexo');

console.log(sexSelect);

sexSelect.value = 'mujer';  // La propiedad value estable el valor del atributo value en HTML

let registerBtn = document.getElementById('register-btn');

registerBtn.disabled = true;

// Estilos CSS (a través del objeto style)

registerBtn.style.cursor = 'not-allowed';

// Clases CSS

let card = document.getElementsByClassName('card')[0];

console.log(card.classList);

// card.classList.add('checked');
// card.classList.remove('checked');
// card.classList.toggle('checked'); Añade la clase si no la tiene y la elimina si la tiene
                                  // IE no tiene soporte para toggle()

console.log(card.classList.contains('checked')); // Devuelve boolean true si contiene la clase pasada