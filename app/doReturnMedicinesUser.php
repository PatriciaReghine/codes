<?php
include 'include/connection.class.php';

try {
    // Obtendo a conexão
    $pdo = Connection::getInstance();
    
    // Executando a consulta
    $stmt = $pdo->query("SELECT m.nome, um.*
                         FROM usuario_medicamento um
                         LEFT JOIN medicamentos m ON m.idmedicamento = um.idmedicamento
                         WHERE idusuario = 11");
    
    // Recuperando todos os resultados como um array associativo
    $info_usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Definindo o cabeçalho para retorno JSON
    header('Content-Type: application/json');
    
    // Retornando os dados como JSON
    echo json_encode($info_usuarios);
    
} catch (PDOException $e) {
    echo json_encode(["error" => "Erro ao executar consulta: " . $e->getMessage()]);
}
?>
