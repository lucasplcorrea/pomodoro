//Variáveis que armazenam o intervalo de tempo e os minutos e segundos do timer.
let timerInterval;
let minutes, seconds;
let isRunning = false; //Variável para controlar o estado on/off do timer.
let pausedTime = 0; //Contador para verificar se há um tempo pausado

function startTimer(durationInMinutes) {
    if (!isRunning) {
        clearInterval(timerInterval); // Limpa o intervalo de tempo existente.
        if (pausedTime > 0) { //Se há um tempo pausado, continue a partir desse tempo.
            minutes = Math.floor(pausedTime / 60);
            seconds = pausedTime % 60;
            pausedTime = 0; //Reinicia o tempo pausado
        }
        else {
            minutes = durationInMinutes;
            seconds = 0;
        }
        displayTime();
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById("btn-start").textContent = "Pausar";
        isRunning = true;
    }
    else {
        clearInterval(timerInterval);
        document.getElementById("btn-start").textContent = "Continuar";
        isRunning = false;
        pausedTime = minutes * 60 + seconds;//Armazena o tempo restante em segundos.
    }
}

function updateTimer() {
    if (seconds > 0) { //condição para reduzir os segundos se > 0
        seconds--;
    } else if (minutes > 0) { // Se os segundos chegarem a 0 e ainda houver minutos restantes.
        minutes--; // Reduz um minuto.
        seconds = 59; // Reinicia os segundos para 59.
    } else { // Se os minutos e os segundos chegarem a 0, o Pomodoro é concluído.
        clearInterval(timerInterval);
        alert("Pomodoro Finalizado!"); //alerta no final do timer
        document.getElementById("btn-start").textContent = "Iniciar";
        isRunning = false;
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
    startTimer(1); //Inicia um Pomodoro de 25 minutos.
}

function startShortBreak() {
    startTimer(5); //Inicia uma pausa curta de 5 minutos.
}

function startLongBreak() {
    startTimer(15); //Inicia uma pausa curta de 15 minutos.
}

function stopTimer() { //Para o timer e o reinicia para 0 minutos e 0 segundos.
    clearInterval(timerInterval);
    minutes = 25; // Reseta os minutos e segundos para 0.
    seconds = 0;
    displayTime();
    isRunning = false;
    document.getElementById("btn-start").textContent = "Iniciar";//Altera o texto do botão para iniciar 
}