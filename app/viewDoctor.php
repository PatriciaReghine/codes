<!-- Incluindo o topo padrão da página -->
<?php include('include/topo.php'); ?>
<link rel="stylesheet" href="./assets/css/doctorStyle.css" />

<div class="app">
    <div class="dashboard">
        <h1>Bem-vindo, Doutor.</h1>

        <form id="form">
            <label for="remedy">Registre o medicamento do paciente X: </label>
            <input type="text" id="remedy" placeholder="Digite aqui o medicamento">

            <label for="vacination">Registre sua ficha de vacinação:  </label>
            <input type="text" id="vacination" placeholder="Digite aqui a vacina">

            <div class="allergyField">
                <label for="allergy">O paciente possui alergia ?</label>
                <label>
                    <input type="radio" value="yes"> Sim
                </label>
                <label>
                    <input type="radio" value="no"> Não
                </label>
            </div>

            <button type="submit">Registrar</button>
        </form>
    </div>
</div>

<!-- Incluindo o script de funções para o médico -->
<script src="./assets/js/doctorFunctions.js"></script>
<!-- Incluindo o footer padrão da página -->
<?php include('include/footer.php'); ?>