<?php
$dsn = 'pgsql:host=postgres;port=5432;dbname=codex;';
$user = 'postgres';
$password = '123456';

try {
    $pdo = new PDO($dsn, $user, $password);
    echo "Conexão com PostgreSQL bem-sucedida!";
} catch (PDOException $e) {
    echo "Erro ao conectar: " . $e->getMessage();
}
