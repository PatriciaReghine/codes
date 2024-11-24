<?php
include 'include/connection.class.php';

try {
    // Obtendo a conexão
    $pdo = Connection::getInstance();
    
    // Executando a consulta
    $stmt = $pdo->query("SELECT v.nome, vu.*
        FROM vacinas_usuarios vu
        LEFT JOIN vacinas v ON v.idvacina = vu.idvacina
        WHERE idusuario = 11
    ");
    
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
