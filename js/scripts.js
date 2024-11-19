//  data de lançamento
const releaseDate = new Date("December 25, 2024 00:00:00").getTime();

// Função de contagem regressiva
function countdown() {
    const now = new Date().getTime();
    const timeRemaining = releaseDate - now;

    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown-timer").innerHTML = "Lançamento!";
    }
}

// Atualiza a contagem a cada segundo
setInterval(countdown, 1000);
