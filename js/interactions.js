// Interacción con los elementos del DOM

// Atributos

let sexSelect = document.getElementById('sexo');

console.log(sexSelect);

sexSelect.value = 'mujer';  // La propiedad value estable el valor del atributo value en HTML

let registerBtn = document.getElementById('register-btn');

registerBtn.disabled = true;