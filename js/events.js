// Eventos

// let notReadedBtn = document.getElementById('not-readed-btn'); Optimizado para un botón
let readedBtn = document.getElementById('readed-btn');
readedBtn.innerHTML = 'Marcar como leido';

function checkCard() {
    card.classList.toggle('checked');
    // if (card.classList.contains('checked')) {
    //     readedBtn.innerHTML = 'Marcar como no leido';
    // } else {
    //     readedBtn.innerHTML = 'Marcar como leido';
    // }  Optimizamos a ternario
    readedBtn.innerHTML = card.classList.contains('checked') ? 'Marcar como no leido' : 'Marcar como leido';
}

// Escuchadores de eventos

let passwordInput = document.getElementById('password');
let passwordValidation = document.querySelectorAll('label span')[0];

passwordInput.addEventListener('input', function () {   // evento como primer parámetro y una función a ejecutar como segundo parámetro
    if (this.value.length < 4) {                        // cada vez que se dispare ese evento
        passwordValidation.style.display = 'inline';
    } else {
        passwordValidation.style.display = 'none';
    }                                  
});
                                 