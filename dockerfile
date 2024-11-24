# Especifica a imagem base
FROM php:apache

# Instala dependências necessárias
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pdo pdo_pgsql pgsql

# Habilita mod_rewrite do Apache (se necessário)
RUN a2enmod rewrite
