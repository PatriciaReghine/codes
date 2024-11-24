<!-- Incluindo o topo padrão da página -->
<?php include('include/topo.php'); ?>
<link rel="stylesheet" href="./assets/css/registerStyle.css" />

<div class="app">
    <div class="dashboard">
        
        <form id="form">
            <h1>Cadastrar Medicamentos</h1>
            
            <label for="typeOfMedicines">Nome do Medicamento</label>
            <select id="typeOfMedicines">
                <option>Paracetamol</option>
                <option>Ibuprofeno</option>
                <option>Doril</option>
            </select>
            
            <label for="useData">Data de início de uso: </label>
            <input type="date" id="useData" placeholder="Digite aqui o medicamento">

            <label for="vacination">Período de uso: </label>
            <input type="text" id="vacination" placeholder="Digite aqui a vacina">

            <label for="typeOfPeriod">Tipo de período</label>
            <select id="typeOfPeriod">
                <option>Semestral</option>
                <option>Mensal</option>
                <option>Diário</option>
            </select>

            <button type="submit">Registrar</button>
        </form>

        <div id="nav"></div>
    </div>
</div>

<!-- Incluindo o script para o uso do Jquery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Incluindo o script de funções para o médico -->
<script src="./assets/js/registerFunctions.js"></script>
<!-- Incluindo o footer padrão da página -->
<?php include('include/footer.php'); ?>