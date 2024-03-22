//Variáveis que armazenam o intervalo de tempo e os minutos e segundos do timer.
let timerInterval;
let minutes, seconds;

function startTimer(durationInMinutes) {
    clearInterval(timerInterval); // Limpa o intervalo de tempo existente.
    minutes = durationInMinutes; // Define os minutos para a duração especificada e os segundos para 0.
    seconds = 0;
    displayTime(); // Exibe o tempo inicial do temporizador.
    timerInterval = setInterval(updateTimer, 1000); // Inicia um novo intervalo do timer, chamando updateTimer a cada segundo (1000 milissegundos).
}

function updateTimer() {
    if (seconds > 0) { //condição para reduzir os segundos se > 0
        seconds--;
    } else if (minutes > 0) { // Se os segundos chegarem a 0 e ainda houver minutos restantes.
        minutes--; // Reduz um minuto.
        seconds = 59; // Reinicia os segundos para 59.
    } else { // Se os minutos e os segundos chegarem a 0, o Pomodoro é concluído.
        clearInterval(timerInterval);
        alert("Pomodoro finalizado!"); //alerta no final do timer
    }
    displayTime(); // Atualiza a exibição do tempo restante no temporizador.
}

//Exibe o tempo restante no timer no HTML com o ID "timer"
function displayTime() { 
    const timerDisplay = document.getElementById("timer"); // Pega o elemento do DOM com o ID "timer".
    // Atualiza o conteúdo do elemento com o tempo restante no formato "mm:ss".
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startPomodoro() {
    startTimer(25); //Inicia um Pomodoro de 25 minutos.
}

function startShortBreak() {
    startTimer(5); //Inicia uma pausa curta de 5 minutos.
}

function startLongBreak() {
    startTimer(15); //Inicia uma pausa curta de 15 minutos.
}

function stopTimer() { //Para o timer e o reinicia para 0 minutos e 0 segundos.
    clearInterval(timerInterval);
    minutes = 0; // Reseta os minutos e segundos para 0.
    seconds = 0;
    displayTime();
}