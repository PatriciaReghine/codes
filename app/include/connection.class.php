<?php

class Connection
{
    private static $instance;

    private function __construct() {}

    public static function getInstance()
    {
        if (!self::$instance) {
            $dsn      = 'pgsql:dbname=codex;host=192.168.100.210';
            $user     = 'postgres';
            $password = '123456';

            try {
                self::$instance = new PDO($dsn, $user, $password);
                self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die('Conexão falhou: ' . $e->getMessage());
            }
        }

        return self::$instance;
    }
}
