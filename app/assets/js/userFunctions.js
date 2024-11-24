/* MEDICAMENTOS */
const containerMedicines = document.getElementById('containerMedicines');

// Função para calcular a quantidade de dias desde o início do medicamento
function calculatePeriod(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

// Função para exibir os medicamentos dinamicamente
function displayMedicines(medicines) {
    let contentToMedicines = '';

    medicines.forEach(medicine => {
        // Calcula o número de dias de uso do medicamento
        const daysTaken = calculatePeriod(medicine.inicio_medicamento);
        let inicio = new Date(medicine.inicio_medicamento);
        let formattedDate = inicio.toLocaleDateString('pt-BR');
        let formattedTime = inicio.toLocaleTimeString('pt-BR', { hour12: false }).slice(0, 5);
        let formattedDateTime = `${formattedDate} ${formattedTime}`;

        // Gera o conteúdo HTML para cada card
        contentToMedicines += `
            <div class="medicine">
                <p class="title_medicine"><strong>${medicine.nome}</strong></p>
                <p><strong>Tomando </strong>a ${daysTaken} dias</p>
                <p><strong>Iniciado em</strong>: ${formattedDateTime}</p>
                <span><strong>Status</strong>: ${medicine.recorrencia ? 'Recorrente' : 'Não recorrente'}</span>
            </div><br><br>
        `;
        
        containerMedicines.innerHTML = contentToMedicines;

    });
}

// Fazendo a requisição AJAX
$.ajax({
    url: 'doReturnMedicinesUser.php',
    method: 'GET',
    success: function(response) {

        if (Array.isArray(response)) {
            displayMedicines(response);
        } else {
            console.error("Erro ao carregar os dados.");
        }
    },
    error: function(xhr, status, error) {
        console.error("Erro na requisição Ajax: " + error);
    }
});

/* VACINAS */
const containerVaccines = document.getElementById('containerVaccines');

function displayVaccines(vaccines) {
    let vaccineHTML = ''; // Variável para acumular os elementos gerados

    vaccines.forEach(vaccine => {
        // Formatando a data das vacinas para tomar
        let proxima_vacinacao = new Date(vaccine.proxima_vacinacao);
        let formattedDateV = proxima_vacinacao.toLocaleDateString('pt-BR');

        // Formatando a data das vacinas tomadas
        let ultima_vacinacao = new Date(vaccine.ultima_vacinacao);
        let formattedDateVt = ultima_vacinacao.toLocaleDateString('pt-BR');

        // Gerando o HTML para este registro
        const contentToVaccines = `
            <div class="medicine">
                <p class="title_medicine"><strong>${vaccine.nome}</strong></p>
                <p><strong>Próxima: ${formattedDateV}</strong></p>
                <p><strong>Tomada em: </strong>${formattedDateVt}</p>   
                <Button class="botao_locais">Confira os locais -></button> 
            </div><br><br>
        `;

        vaccineHTML += contentToVaccines; // Acumula o conteúdo
    });

    // Insere todo o conteúdo no contêiner de uma só vez
    containerVaccines.innerHTML = vaccineHTML;
}

// Fazendo a requisição AJAX
$.ajax({
    url: 'doReturnVacinesUser.php',
    method: 'GET',
    dataType: 'json', // Certifique-se de que o servidor retorna JSON
    success: function(response) {
        if (Array.isArray(response)) {
            console.log(response);
            displayVaccines(response); // Exibe as vacinas
        } else {
            console.error("Erro ao carregar os dados: resposta não é um array.");
        }
    },
    error: function(xhr, status, error) {
        console.error("Erro na requisição Ajax: " + error);
    }
});


/* NAV */
const containerNav = document.getElementById('nav');

const contentToNav = `
    <nav class="navigation">
        <ul>
            <li class="active"><a href="#home"><img width="35" height="35" src="https://img.icons8.com/ios/35/home-page.png" alt="home-page"/></a></li>
            <li><a href="#requests"><img width="35" height="35" src="https://img.icons8.com/laces/64/apple-watch-apps.png" alt="apple-watch-apps"/></a></li>
            <li><a href="#appointments"><img width="35" height="35" src="https://img.icons8.com/parakeet-line/48/moleskine.png" alt="moleskine"/></a></li>
        </ul>
    </nav>
`;

containerNav.innerHTML = contentToNav;