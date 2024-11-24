/* MEDICAMENTOS */
const containerMedicines = document.getElementById('containerMedicines');

// Função para calcular a quantidade de dias desde o início do medicamento
function calculatePeriod(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    
    // Calcula a diferença em milissegundos
    const diffTime = today - start;
    
    // Converte a diferença para dias
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

    // Inserir o conteúdo gerado na página
}

// Fazendo a requisição AJAX
$.ajax({
    url: 'doReturnMedicinesUser.php',  // Caminho para o seu arquivo PHP
    method: 'GET',
    success: function(response) {
        // Verifica se a resposta é um array e exibe os dados
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

const contentToVaccines = `
    <div class="medicine">
        <p>Vacina para dengue</p>
        <p>Há cada 6 meses</p>
    </div>
    <div class="status">
        <p>jan/2024</p>   
        <span>não tomou</span> 
    </div>
`;

containerVaccines.innerHTML = contentToVaccines;

/* NAV */
const containerNav = document.getElementById('nav');

const contentToNav = `
    <nav class="navigation">
        <ul>
            <li><a href="#home"><img width="50" height="50" src="https://img.icons8.com/ios/50/home-page.png" alt="home-page"/></a></li>
            <li><a href="#requests"><img width="50" height="50" src="https://img.icons8.com/laces/64/apple-watch-apps.png" alt="apple-watch-apps"/></a></li>
            <li><a href="#appointments"><img width="50" height="50" src="https://img.icons8.com/parakeet-line/48/moleskine.png" alt="moleskine"/></a></li>
        </ul>
    </nav>
`;

containerNav.innerHTML = contentToNav;