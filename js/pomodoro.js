// Sua chave de API
const apiKey = 'CHAVE_api';

// URL base da API para buscar exercícios de stretching
const apiUrl = 'https://api.api-ninjas.com/v1/exercises?type=stretching&difficulty=beginner';

// Array para armazenar os exercícios obtidos da API
let exerciseArray = [];
// Offset atual para paginação
let currentOffset = 0;

// Função para buscar os exercícios de stretching da API, armazenar e exibir
function fetchStretchingExercises() {
    // Verifica se todos os exercícios já foram exibidos
    if (exerciseArray.length === 0) {
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
                // Exibe o próximo exercício na página HTML
                displayNextExercise();
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    } else {
        // Se ainda houver exercícios na variável local, exibe o próximo exercício
        displayNextExercise();
    }
}

// Função para exibir o próximo exercício na página HTML
function displayNextExercise() {
    const exerciseContainer = document.getElementById('exercise-container');
    if (exerciseContainer && exerciseArray.length > 0) {
        // Remove o primeiro exercício do array
        const nextExercise = exerciseArray.shift();
        // Traduz o nome do exercício, se estiver disponível no arquivo pt-br.json
        const translatedName = translateExerciseName(nextExercise.name);
        // Exibe o exercício na página HTML
        const exerciseElement = document.createElement('div');
        exerciseElement.textContent = translatedName ? translatedName : nextExercise.name;
        exerciseContainer.innerHTML = '';
        exerciseContainer.appendChild(exerciseElement);
        // Armazena o exercício exibido no localStorage
        saveDisplayedExercise(nextExercise.name);
    } else {
        // Se não houver mais exercícios na variável local, busca mais exercícios
        currentOffset += 10; // Atualiza o offset para obter o próximo conjunto de exercícios
        exerciseArray = []; // Limpa o array atual
        fetchStretchingExercises(); // Chama a função para buscar mais exercícios
    }
}

// Função para traduzir o nome do exercício
function translateExerciseName(name) {
    // Aqui você irá implementar a lógica para traduzir o nome do exercício
    // Pode-se utilizar o arquivo pt-br.json para fazer essa tradução
    // Retorne o nome traduzido, se estiver disponível, ou null caso contrário
}

// Função para armazenar o exercício exibido no localStorage
function saveDisplayedExercise(exerciseName) {
    let storedExercises = JSON.parse(localStorage.getItem('storedExercises')) || [];
    storedExercises.push(exerciseName);
    localStorage.setItem('storedExercises', JSON.stringify(storedExercises));
}

//Função de teste para obter proximo exercício
function getNextExercise() {
  displayNextExercise();
}

// Chame a função para buscar os exercícios quando a página carregar
window.onload = fetchStretchingExercises;
