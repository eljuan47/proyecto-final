let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');

    if (isNaN(userGuess)) {
        resultMessage.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    if (userGuess === randomNumber) {
        resultMessage.textContent = "¡Felicidades! Adivinaste el número.";
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('guessButton').disabled = true; // Desactivar botón
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "Demasiado bajo. Intenta otra vez.";
    } else {
        resultMessage.textContent = "Demasiado alto. Intenta otra vez.";
    }
});
