<!-- Incluindo o topo padrão da página -->
<?php include('include/topo.php'); ?>
<link rel="stylesheet" href="./assets/css/doctorStyle.css" />

<div class="app">
    <div class="dashboard">
        <h1>Pesquisar usuário</h1>
        
        <label for="search">CPF do usuário:</label>
        <input type="text" id="search" placeholder="Digite o CPF do usuário">

        <button type="submit" id="searchUser" >Buscar</button>

        <div class="username">
            <p>Nome do Usuário: </p>
            <p>Pedro Fonseca</p>
        </div>
        
        <div class="startDate">
            <p>Data de início: </p>
            <p>20/11/2024</p>
        </div>
        
        <div class="usePeriod">
            <p>Período de uso: </p>
            <p>Desde ago/2024</p>
        </div>
        
        <div class="typeOfPeriod">
            <p>Tipo de período: </p>
            <p>Diário</p>
        </div>

        <a href="#">Ver mais...</a>
    </div>
    <div id="nav"></div>
</div>

<!-- Incluindo o script para o uso do Jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Incluindo o script de funções do doutor -->
<script src="./assets/js/doctorFunctions.js" ></script>
<!-- Incluindo o footer padrão da página -->
<?php include('include/footer.php'); ?>