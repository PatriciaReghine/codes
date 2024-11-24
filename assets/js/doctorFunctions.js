/* RECEBENDO DADOS DE USUÁRIO */
$(document).ready(function() {
    $('#searchUser').on('click', function() {

        const backUrl = 'https://LinkDoBackend.com';
        const cpf = $('#search').val();
        
        if(!cpf) {
            return alert('CPF inválido');
        }

        $.ajax({
            url: backUrl,
            type: 'POST',
            data: { cpf: cpf }, 
            sucess: function (res) {
                if(res.length > 0) {
                    res.forEach(function(user) {
                        res.append(`
                            <div class="username">
                                <p>Nome do Usuário: </p>
                                <p>${user.username}</p>
                            </div>
            
                            <div class="startDate">
                                <p>Data de início: </p>
                                <p>${user.startDate}</p>
                            </div>
            
                            <div class="usePeriod">
                                <p>Período de uso: </p>
                                <p>${user.usePeriod}</p>
                            </div>
            
                            <div class="typeOfPeriod">
                                <p>Tipo de período: </p>
                                <p>${user.typeOfPeriod}</p>
                            </div>
                        `)
            })} else {
                alert('Usuário não encontrado');
                }
                    
            },
            error: function (err) {
                console.error(err);
            }
        });

    });
});







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