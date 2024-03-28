// Array com os exercícios traduzidos
const translatedExercises = [
    {
        "id": 0,
        "name": "Standing Hip Circles",
        "brName": "Círculos de Quadril em Pé",
        "type": "Alongamento",
        "muscle": "Abdutores",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Segurando em um apoio vertical, inicie ficando em pé em apenas uma perna. Dobre a perna sem apoio para formar um ângulo de 90 graus no joelho. Abra o quadril o máximo que puder, tentando fazer um grande círculo com o joelho. Realize esse movimento lentamente repetidas vezes e repita com a outra perna.",
        "image": "./img/exercise/Standing Hip Circles.svg"
    },
    {
        "id": 1,
        "name": "Groiners",
        "brName": "Groiners",
        "type": "Alongamento",
        "muscle": "Adutores",
        "equipment": "Apenas o Corpo",
        "difficulty": "beginner",
        "instructions": "Inicie na posição de uma flexão de braços no chão. Essa será sua posição inicial. Usando as duas pernas, salte para a frente aterrisando com os pés próximos as mãos. Mantenha a cabeça erguida ao fazer isso. Retorne a posição inicial e imediatamente repita o movimento, continuando por 10 a 20 repetições.",
        "image": "./img/exercise/Groiners.svg"
    },
    {
        "id": 2,
        "name": "Stomach Vacuum",
        "brName": "Vácuo de Estômago",
        "type": "Alongamento",
        "muscle": "Abdominal",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Para iniciar, fique em pé com os pés separados na largura dos ombros. Coloque as mãos no quadril. Essa é a posição inicial. Agora lentamente, inspire quanto ar conseguir e comece a expirar também quanto ar conseguir, enquanto contrai o estômago para dentro o máximo que conseguir e mantenha essa posição. Tente imaginar seu umbigo tocando sua espinha dorsal. Uma contração isométrica dura aproximadamente 20 segundos. Durante os 20 segundos segurando, tente respirar normalmente. Então inspire e traga seu estômago de volta a posição inicial. Assim que tiver praticado bastante esse exercício, tente realizá-lo por mais que 20 segundos. Dica: Você pode conseguir chegar a 40-60 segundos. Repita pela quantidade indicada de repetições.",
        "image": "./img/exercise/Stomach Vacuum.svg"
    },
    {
        "id": 3,
        "name": "Side Wrist Pull",
        "brName": "Tração Lateral do Pulso",
        "type": "Alongamento",
        "muscle": "Ombros",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Esse alongamento funciona melhor em pé. Cruze o braço esquerdo pela linha central do seu corpo and segure o punho esquerdo na mão direita na altura do quadril. Inicie o alongamento com o braço esquerdo levemente flexionado. Lentamente estique, puxe e levante o braço até a altura do ombro, como mostrado na figura. Sinta o alongamento iniciar nas suas costas, não nos ombros, e não puxe muito forte nas articulações do ombro. Troque de lado.",
        "image": "./img/exercise/Side Wrist Pull.svg"
    },
    {
        "id": 4,
        "name": "Standing leg swing",
        "brName": "Balanço de Perna em Pé",
        "type": "Alongamento",
        "muscle": "Posterior da Coxa",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Fique em pé ao lado de uma cadeira ou outro suporte, segurando nela com uma mão. Balance sua perna para a frente, mantendo a perna esticada. Continue balançando a perna para trás, trazendo a perna o quanto sua flexibilidade permitir. Repita de 5 a 10 vezes e troque de perna.",
        "image": "./img/exercise/Standing leg swing.svg"
    },
    {
        "id": 5,
        "name": "Side Leg Raises",
        "brName": "Elevações Laterais das Pernas",
        "type": "Alongamento",
        "muscle": "Adutores",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Fique em pé ao lado de uma cadeira, que você pode usar como suporte. Fique em pé em uma perna. Essa será sua posição inicial. Mantendo sua perna esticada, levante-a para o lado o máximo que conseguir, e balance para baixo, permitindo que a perna cruze pela outra perna. Repita do movimento de 5 a 10 vezes, aumentando a amplitude a cada movimento.",
        "image": "./img/exercise/Side Leg Raises.svg"
    },
    {
        "id": 6,
        "name": "Inchworm",
        "brName": "Inchworm",
        "type": "Alongamento",
        "muscle": "Posterior da Coxa",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Fique em pé com as pernas fechadas e os pés juntos. Mantendo as pernas esticadas, alongue para baixo e coloque as mãos no chão na frente do corpo. Essa será a posição inicial. Inicie deslocando as mãos para a frente lentamente, alternando entre esquerda e direita. Enquanto faz isso, incline apenas o quadril, mantendo as pernas esticadas. Continue até seu corpo estar em poisção vertical ao chão, na posição de flexão de braço. Agora, mantenha os braços parados no lugar e dê passos curtos, movendo apenas poucos centimetros por vez. Continue andando até seus pés chegarem perto das mãos, mantendo as pernas esticadas enquanto faz isso.",
        "image": "./img/exercise/Inchworm.svg"
    },
    {
        "id": 7,
        "name": "Ankle Circles",
        "brName": "Círculos de Tornozelo",
        "type": "Alongamento",
        "muscle": "Panturrilhas",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Use um objeto firme para se sustentar, como um rack de agachamento. Levante a perna direita no ar (apenas alguns centímetros do chão) e execute um movimento circular com o dedão do pé. Imagine que está desenhando um grande círculo com o dedo. Dica: Um círculo equivale a 1 repetição. Respire normalmente enquanto executa o movimento. Quando terminar com o pé direito, repita com a perna esquerda. Sem variações.",
        "image": "./img/exercise/Ankle Circles.svg"
    },
    {
        "id": 8,
        "name": "Standing Biceps Stretch",
        "brName": "Alongamento de Bíceps em Pé",
        "type": "Alongamento",
        "muscle": "bíceps",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Entrelace as mãos ao redor das costas com a palma das mãos se enconstando, estique os braços e depois gire-os até as palmas das mãos virarem para fora. Levante os braços para cima e segure até sentir o bíceps alongar.",
        "image": "./img/exercise/Standing Biceps Stretch.svg"
    },
    {
        "id": 9,
        "name": "Groin and Back Stretch",
        "brName": "Alongamento de Virilha e Costas",
        "type": "Alongamento",
        "muscle": "Adutores",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Sente no chão com os joelhos flexionados e pés unidos. Entrelace os dedos atrás da cabeça. Essa será sua posição inicial. Flexione o tronco para a frente, trazendo os cotovelos para dentro das pernas. Depois de uma breve pausa, retorne para a posição inicial com a cabeça para cima e as costas retas. Repita de 10 a 20 vezes.",
        "image": "./img/exercise/Groin and Back Stretch.svg"
    },
    {
        "id": 10,
        "name": "Lying Hamstring",
        "brName": "Alongamento de Isquiotibiais Deitado",
        "type": "Alongamento",
        "muscle": "Isquiotibiais",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Deite de costas com as pernas estendidas. Seu parceiro deve estar ajoelhado ao seu lado. Levante uma perna em direção ao teto e peça para seu parceiro segurar o tornozelo. Se necessário, seu parceiro pode usar o ombro para apoiar sua perna. Esta será sua posição inicial. Peça para seu parceiro empurrar sua perna em direção ao seu peito apenas o suficiente para você sentir um leve desconforto. Mantenha o alongamento por 10 segundos. Após 10 segundos, empurre ativamente contra a resistência do seu parceiro por 6 segundos. Em seguida, relaxe sua perna, permitindo que seu parceiro empurre gentilmente a perna em direção à sua cabeça. Certifique-se de informar seu ajudante quando o alongamento for adequado para evitar lesões ou alongamentos excessivos. Troque de lado quando completar."
    },
    {
        "id": 11,
        "name": "Knee Circles",
        "brName": "Círculos de Joelho",
        "type": "Alongamento",
        "muscle": "Panturrilhas",
        "equipment": "Apenas o Corpo",
        "difficulty": "iniciante",
        "instructions": "Fique em pé com as pernas juntas e as mãos na cintura. Agora mova os joelhos em um movimento circular enquanto respira normalmente. Repita pelo número recomendado de repetições."
    },
    {
        "id": 12,
        "name": "Intermediate Hip Flexor and Quad Stretch",
        "brName": "Alongamento Intermediário de Flexores de Quadril e Quadríceps",
        "type": "Alongamento",
        "muscle": "Quadríceps",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Deite de bruços no chão, com uma corda, cinto ou faixa encaixada em um dos pés. Flexione o joelho e estenda o quadril da perna a ser alongada, usando ambas as mãos para puxar a faixa. Seu joelho e seu quadril devem se afastar do chão, criando tensão nos flexores do quadril e quadríceps. Mantenha o alongamento por 10-20 segundos e repita na outra perna."
    },
    {
        "id": 13,
        "name": "Sit Squats",
        "brName": "Agachamentos Sentados",
        "type": "Alongamento",
        "muscle": "Quadríceps",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Fique em pé com os pés na largura dos ombros. Esta será sua posição inicial. Inicie o movimento flexionando os joelhos e os quadris, sentando-se com os quadris para trás. Continue até agachar uma parte do caminho, mas acima do paralelo, e reverta rapidamente o movimento até retornar à posição inicial. Repita por 5-10 repetições."
    },
    {
        "id": 14,
        "name": "Calf SMR",
        "brName": "SMR de Panturrilhas",
        "type": "Alongamento",
        "muscle": "Panturrilhas",
        "equipment": "Rolo de Espuma",
        "difficulty": "Iniciante",
        "instructions": "Comece sentado no chão. Coloque um rolo de espuma sob a perna inferior. Sua outra perna pode estar cruzada sobre a oposta ou colocada no chão, apoiando parte do seu peso. Esta será sua posição inicial. Coloque as mãos ao seu lado ou logo atrás de você e pressione para levantar os quadris do chão, colocando a maior parte do seu peso contra o músculo da panturrilha. Role da parte inferior do joelho até acima do tornozelo, pausando nos pontos de tensão por 10-30 segundos. Repita para a outra perna."
    },
    {
        "id": 15,
        "name": "Lying hamstring stretch with band",
        "brName": "Alongamento de Isquiotibiais Deitado com Faixa",
        "type": "Alongamento",
        "muscle": "Isquiotibiais",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Deite-se de costas com uma perna estendida acima de você, com o quadril a noventa graus. Mantenha a outra perna reta no chão. Passe uma faixa, banda ou corda sobre a bola do seu pé. Esta será sua posição inicial. Puxe a faixa para criar tensão nas panturrilhas e isquiotibiais. Mantenha este alongamento por 10-30 segundos e repita com a outra perna."
    },
    {
        "id": 16,
        "name": "Hamstring-SMR",
        "brName": "SMR de Isquiotibiais",
        "type": "Alongamento",
        "muscle": "Isquiotibiais",
        "equipment": "Rolo de Espuma",
        "difficulty": "Iniciante",
        "instructions": "Em posição sentada, estenda as pernas sobre um rolo de espuma para que ele fique posicionado na parte de trás das pernas superiores. Coloque as mãos ao lado ou atrás de você para ajudar a suportar seu peso. Esta será sua posição inicial. Usando as mãos, levante os quadris do chão e desloque o peso sobre o rolo de espuma para uma perna. Relaxe os isquiotibiais da perna que você está alongando. Role sobre a espuma de baixo do quadril até acima da parte de trás do joelho, pausando nos pontos de tensão por 10-30 segundos. Repita para a outra perna."
    },
    {
        "id": 17,
        "name": "Upper Back-Leg Grab",
        "brName": "Agarrar a Perna nas Costas",
        "type": "Alongamento",
        "muscle": "Isquiotibiais",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Sentado, incline-se para frente para abraçar suas coxas por baixo com os dois braços. Mantenha os joelhos juntos e as pernas estendidas enquanto você traz seu peito em direção aos joelhos. Você também pode alongar as costas médias puxando as costas para longe dos joelhos enquanto os abraça."
    },
    {
        "id": 18,
        "name": "Dancer's Stretch",
        "brName": "Alongamento da Bailarina",
        "type": "Alongamento",
        "muscle": "Parte Inferior da Coxa",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Sente-se no chão. Cruze a perna direita sobre a esquerda, mantendo o joelho dobrado. Sua perna esquerda está reta e no chão. Coloque seu braço esquerdo na sua perna direita e sua mão direita no chão. Gire seu corpo superior para a direita e segure por 10-20 segundos. Troque de lado."
    },
    {
        "id": 19,
        "name": "Elbow Circles",
        "brName": "Círculos de Cotovelo",
        "type": "Alongamento",
        "muscle": "Ombros",
        "equipment": "Apenas o Corpo",
        "difficulty": "Iniciante",
        "instructions": "Sente-se ou fique com os pés levemente afastados. Coloque as mãos nos ombros com os cotovelos na altura dos ombros e apontando para fora. Lentamente faça um círculo com os cotovelos. Expire enquanto começa o círculo e inspire enquanto completa o círculo."
    }
];

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
