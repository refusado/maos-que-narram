README do servidor

Este README fornece as informações necessárias para configurar e rodar o projeto Laravel. Siga as instruções abaixo para configurar o ambiente de desenvolvimento utilizando Laragon e preparar o projeto.

Requisitos

	1.	Laragon instalado (versão mínima recomendada: última versão estável).
	2.	PHP 8.1 configurado no Laragon.
	3.	Composer instalado (Laragon já vem com Composer, mas confirme com composer --version no terminal).

Configurações do Laragon

	1.	Definir versão do PHP:
	•	Abra o menu principal do Laragon.
	•	Vá em Config > PHP Version e selecione a versão 8.1.
	2.	Habilitar extensões necessárias no PHP:
Certifique-se de que as seguintes extensões estão habilitadas no arquivo php.ini:

extension=pdo_mysql
extension=mysqli
extension=fileinfo


	3.	Servidor e Banco de Dados:
	•	Servidor: Certifique-se de que o Apache ou Nginx está habilitado no Laragon.
	•	Banco de Dados: Utilize o MySQL embutido no Laragon.

Passos para Configuração do Projeto

1. Clone o Repositório

Clone o repositório do projeto para o diretório do Laragon:

cd C:\laragon\www
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

2. Instale as Dependências

Rode o comando abaixo para instalar as dependências do projeto:

composer install

3. Crie o Arquivo .env

Faça uma cópia do arquivo .env.example e renomeie para .env:

cp .env.example .env

Edite o arquivo .env para incluir as configurações do banco de dados:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<NOME_DO_BANCO>
DB_USERNAME=root
DB_PASSWORD=

4. Crie o Banco de Dados

Abra o HeidiSQL (ou outro cliente MySQL disponível no Laragon) e crie um banco de dados manualmente:

CREATE DATABASE <NOME_DO_BANCO>;

Substitua <NOME_DO_BANCO> pelo nome desejado.

5. Rode as Migrações

Após configurar o .env, execute as migrações para criar as tabelas no banco:

php artisan migrate

Iniciar o Servidor

Inicie o servidor do Laragon (Apache/Nginx). Você também pode usar o comando abaixo para iniciar o servidor embutido do Laravel:

php artisan serve

Acesse o projeto em: http://localhost:8000 ou pelo domínio configurado no Laragon (exemplo: http://meuprojeto.test).

Configurações Padrão do Projeto

	•	Framework: Laravel
	•	PHP: 8.1
	•	Banco de Dados: MySQL
	•	Servidor: Apache ou Nginx

Pronto! O projeto está configurado e funcionando.