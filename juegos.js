let resultado = document.getElementById('resultado');

document.getElementById('piedra').addEventListener('click', () => {
    jugar('piedra');
});

document.getElementById('papel').addEventListener('click', () => {
    jugar('papel');
});

document.getElementById('tijera').addEventListener('click', () => {
    jugar('tijera');
});

function jugar(userChoice) {
    let choices = ['piedra', 'papel', 'tijera'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let user = userChoice;
    let computer = computerChoice;

    if (user === computer) {
        resultado.textContent = `Empate! Ambos eligieron ${user}.`;
    } else if ((user === 'piedra' && computer === 'tijera') ||
               (user === 'papel' && computer === 'piedra') ||
               (user === 'tijera' && computer === 'papel')) {
        resultado.textContent = `Ganaste! ${user} vence a ${computer}.`;
    } else {
        resultado.textContent = `Perdiste! ${computer} vence a ${user}.`;
    }
}
