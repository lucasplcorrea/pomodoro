// Sua chave de API
const apiKey = 'SUA API AQUI';

// URL base da API para buscar exercícios de stretching
const apiUrl = 'https://api.api-ninjas.com/v1/exercises?type=stretching&difficulty=beginner';

// Array para armazenar os exercícios obtidos da API
let exerciseArray = [];
// Offset atual para paginação
let currentOffset = 0;
// Índice do exercício atual
let currentExerciseIndex = -1;

// Função para buscar os exercícios de stretching da API, armazenar e exibir
function fetchStretchingExercises() {
    // Faz a chamada à API com o offset atual
    fetch(`${apiUrl}&offset=${currentOffset}`, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar os exercícios de stretching');
        }
        return response.json();
    })
    .then(data => {
        // Adiciona os exercícios obtidos ao array
        exerciseArray = data;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

// Função para exibir o próximo exercício na página HTML
function displayNextExercise() {
    const exerciseModalBody = document.querySelector('.modal-body');
    const exerciseModalTitle = document.querySelector('.modal-title');

    if (exerciseModalBody && exerciseModalTitle && exerciseArray.length > 0) {
        // Atualiza o índice do exercício atual para o próximo
        currentExerciseIndex++;
        // Verifica se o índice está dentro dos limites do array
        if (currentExerciseIndex < exerciseArray.length) {
            const nextExercise = exerciseArray[currentExerciseIndex];
            // Exibe o exercício no modal
            exerciseModalTitle.textContent = translateExerciseName(nextExercise.name);
            // Limpa o conteúdo anterior do modal
            exerciseModalBody.innerHTML = '';
            // Verifica se há uma imagem definida para o exercício
            if (nextExercise.hasOwnProperty('image')) {
                console.log("Imagem Encontrada");
                // Adiciona a imagem apenas quando o modal for aberto
                const exerciseImage = document.createElement('img');
                exerciseImage.src = nextExercise.image;
                // Adiciona um ouvinte de evento para carregar a imagem quando o modal for exibido
                document.getElementById('exampleModal').addEventListener('show.bs.modal', function() {
                    exerciseModalBody.appendChild(exerciseImage);
                });
            } else {
                // Verifica se há uma tradução para o exercício
                const translatedExercise = translatedExercises.find(exercise => exercise.name === nextExercise.name);
                if (translatedExercise && translatedExercise.hasOwnProperty('image')) {
                    console.log("Imagem Encontrada no arquivo de tradução")
                    const exerciseImage = document.createElement('img');
                    exerciseImage.src = translatedExercise.image;
                    exerciseModalBody.appendChild(exerciseImage);
                } else if (translatedExercise) {
                    console.log("Imagem Não Encontrada")
                    exerciseModalBody.innerHTML = `
                        <p><strong>Tipo:</strong> ${translatedExercise.type}</p>
                        <p><strong>Músculo:</strong> ${translatedExercise.muscle}</p>
                        <p><strong>Equipamento:</strong> ${translatedExercise.equipment}</p>
                        <p><strong>Dificuldade:</strong> ${translatedExercise.difficulty}</p>
                        <p><strong>Instruções:</strong> ${translatedExercise.instructions}</p>
                    `;
                    // Armazena o exercício exibido no localStorage
                    saveDisplayedExercise(nextExercise.name);
                } else {
                    console.log("Nenhuma Tradução Encontrada, Exibindo em Inglês")
                    exerciseModalBody.innerHTML = `
                        <p><strong>Tipo:</strong> ${nextExercise.type}</p>
                        <p><strong>Músculo:</strong> ${nextExercise.muscle}</p>
                        <p><strong>Equipamento:</strong> ${nextExercise.equipment}</p>
                        <p><strong>Dificuldade:</strong> ${nextExercise.difficulty}</p>
                        <p><strong>Instruções:</strong> ${nextExercise.instructions}</p>
                    `;
                    // Armazena o exercício exibido no localStorage
                    saveDisplayedExercise(nextExercise.name);
                }
            }
        } else {
            // Se não houver mais exercícios no array, buscar mais exercícios
            currentOffset += 10;
            fetchStretchingExercises();
            // Reinicia o índice do exercício atual
            currentExerciseIndex = -1;
        }
    }
}

// Função para armazenar o exercício exibido no localStorage
function saveDisplayedExercise(exerciseName) {
    let storedExercises = JSON.parse(localStorage.getItem('storedExercises')) || [];
    storedExercises.push(exerciseName);
    localStorage.setItem('storedExercises', JSON.stringify(storedExercises));
}

// Função para traduzir o nome do exercício
function translateExerciseName(name) {
    // Procurar o nome do exercício no array de tradução
    const translatedExercise = translatedExercises.find(exercise => exercise.name === name);
    // Se encontrar a tradução, retornar o nome traduzido
    if (translatedExercise) {
        return translatedExercise.brName;
    }
    // Se não encontrar a tradução, retornar o nome original
    return name;
}

// Função para avançar para o próximo exercício
function getNextExercise() {
    displayNextExercise();
}

// Chama a função para avançar para o próximo exercício quando o botão for clicado
document.getElementById('btn-next-exercise').addEventListener('click', getNextExercise);

// Adiciona um ouvinte de evento ao modal para chamar getNextExercise ao ser exibido
document.getElementById('exampleModal').addEventListener('show.bs.modal', getNextExercise);

// Chame a função para buscar os exercícios quando a página carregar
window.onload = function() {
    fetchStretchingExercises();
};
