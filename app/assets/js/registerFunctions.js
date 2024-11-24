/* ENVIO DE DADOS PARA O BACKEND */
$(document).ready(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();
        
        const data = {
            name: $('#typeOfMedicines').val(),
            useData: $('#useData').val(),
            usePeriod: $('#vacination').val(),
            typeOfperiod: $('#typeOfPeriod').val(),
        };

        $.ajax({
            url: 'https://LinkDoBackend.com',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            sucess: function(res) {
                alert('Dados enviados com sucesso!')
            },
            error: function(err) {
                alert('Falha ao enviar dados');
                console.log(err);
            }
        });
    });
});


/* NAV */
const containerNav = document.getElementById('nav');

const contentToNav = `
    <nav class="navigation">
        <ul>
            <li><a href="viewUser.php"><img width="35" height="35" src="https://img.icons8.com/ios/35/home-page.png" alt="home-page"/></a></li>
            <li class="active"><a href="registerMedicine.php"><img width="35" height="35" src="https://img.icons8.com/laces/64/apple-watch-apps.png" alt="apple-watch-apps"/></a></li>
            <li><a href="viewDoctor.php"><img width="35" height="35" src="https://img.icons8.com/parakeet-line/48/moleskine.png" alt="moleskine"/></a></li>
        </ul>
    </nav>
`;

containerNav.innerHTML = contentToNav;