// Sua chave de API
const apiKey = 'YOUR_API_KEY';

// URL da API para buscar exercícios de stretching
const apiUrl = 'https://api.api-ninjas.com/v1/exercises?type=stretching';

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
    displayExercises(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

// Função para exibir os exercícios na página HTML
function displayExercises(exercises) {
  const exercisesContainer = document.getElementById('exercises-container');
  exercisesContainer.innerHTML = ''; // Limpa o conteúdo anterior, se houver

  if (exercises && exercises.length > 0) {
    const ul = document.createElement('ul');

    exercises.forEach(exercise => {
      const li = document.createElement('li');
      li.textContent = exercise.name;
      ul.appendChild(li);
    });

    exercisesContainer.appendChild(ul);
  } else {
    exercisesContainer.textContent = 'Nenhum exercício de stretching encontrado.';
  }
}

// Chame a função para buscar os exercícios quando a página carregar
window.onload = fetchStretchingExercises;
