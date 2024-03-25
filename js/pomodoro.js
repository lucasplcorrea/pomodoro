// Sua chave de API
const apiKey =  'MY-API-KEY';   

// URL da API para buscar exercícios de stretching
const apiUrl = 'https://api.api-ninjas.com/v1/exercises?type=stretching&difficulty=beginner';

// Função para buscar os exercícios de stretching da API e exibir na página HTML
function fetchStretchingExercises() {
  fetch(apiUrl, {
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
    // Sorteia um exercício dentre os retornados pela API e exibe na página HTML
    const selectedExercise = getRandomExercise(data);
    if (selectedExercise) {
      // Exibe o exercício na página HTML
      displayExercise(selectedExercise);
    } else {
      console.log('Todos os exercícios já foram exibidos.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

// Função para exibir um exercício na página HTML
function displayExercise(exercise) {
  const exerciseContainer = document.getElementById('exercise-container');
  if (exerciseContainer) {
    exerciseContainer.textContent = exercise.name;
  } else {
    console.error('Elemento de contêiner de exercício não encontrado.');
  }
}

// Função para sortear um exercício dentre os disponíveis
function getRandomExercise(exercises) {
  const storedExercises = JSON.parse(localStorage.getItem('storedExercises')) || [];

  const availableExercises = exercises.filter(exercise => !storedExercises.includes(exercise.name));

  if (availableExercises.length === 0) {
    // Todos os exercícios foram exibidos, então resetamos o armazenamento.
    localStorage.setItem('storedExercises', JSON.stringify([]));
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableExercises.length);
  const selectedExercise = availableExercises[randomIndex];

  // Armazena o exercício sorteado para evitar repetições
  storedExercises.push(selectedExercise.name);
  localStorage.setItem('storedExercises', JSON.stringify(storedExercises));

  return selectedExercise;
}

// Chame a função para buscar os exercícios quando a página carregar
window.onload = fetchStretchingExercises;
