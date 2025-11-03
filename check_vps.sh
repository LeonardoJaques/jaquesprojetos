#!/bin/bash
# Script temporário para verificar o VPS

echo "=== Verificando arquivos no VPS ==="
echo ""
echo "Conectando ao VPS para verificar a estrutura do site..."
echo ""

# Comandos para executar manualmente
cat << 'EOF'
Execute estes comandos após conectar ao VPS:

ssh leo@191.252.178.228

Depois de conectado, execute:

1. Listar todos os arquivos no diretório do site:
   ls -lah /var/www/jaquesprojetos.com.br/html/

2. Procurar por arquivos PDF:
   find /var/www/jaquesprojetos.com.br/html/ -name "*.pdf"

3. Verificar o index.html:
   grep -i "pdf" /var/www/jaquesprojetos.com.br/html/index.html

4. Verificar permissões:
   ls -la /var/www/jaquesprojetos.com.br/html/*.pdf

EOF
