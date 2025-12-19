# mini-projeto-M2
📚 Biblioteca API

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de livros.
O projeto segue uma estrutura organizada utilizando MVC, Mongoose e variáveis de ambiente com dotenv.

🚀 Tecnologias Utilizadas

Node.js

Express

MongoDB

Mongoose

Dotenv

JavaScript (ES Modules)

📁 Estrutura do Projeto
📦 biblioteca-api
 ┣ 📂 src
 ┃ ┣ 📂 config
 ┃ ┃ ┗ 📜 dbConect.js
 ┃ ┣ 📂 controllers
 ┃ ┃ ┗ 📜 livroController.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 livro.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┗ 📜 livrosRoutes.js
 ┃ ┗ 📜 app.js
 ┣ 📜 server.js
 ┣ 📜 .env
 ┣ 📜 package.json
 ┗ 📜 README.md

⚙️ Configuração do Ambiente

Crie um arquivo .env na raiz do projeto com a string de conexão do MongoDB:

DB_CONCECTION_STRING=mongodb+srv://usuario:senha@cluster.mongodb.net/biblioteca

🔧 Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/biblioteca-api.git


Entre na pasta do projeto:

cd biblioteca-api


Instale as dependências:

npm install

▶️ Executando a Aplicação
npm start


Servidor rodando em:

http://localhost:3000

📌 Rotas da API
📖 Livros
Método	Rota	Descrição
GET	/livros	Lista todos os livros
GET	/livros/:id	Busca livro por ID
POST	/livros	Cadastra um novo livro
PUT	/livros/:id	Atualiza um livro
DELETE	/livros/:id	Remove um livro
🧪 Exemplo de JSON (POST /livros)
{
  "titulo": "Clean Code",
  "editora": "Prentice Hall",
  "preco": 99.90,
  "paginas": 464
}

🛠 Funcionalidades

Conexão com MongoDB usando Mongoose

CRUD completo de livros

Estrutura MVC

Uso de rotas com Express Router

Tratamento de erros com try/catch

Variáveis de ambiente com dotenv

📦 Model – Livro

Campos do livro no banco de dados:

titulo (String, obrigatório)

editora (String)

preco (Number)

paginas (Number)

👤 Autor

Desenvolvido por Marcelo Henrique 🚀

📄 Licença

Este projeto está sob a licença MIT.

🔍 Corrigir pequenos erros no código (tem alguns detalhes de digitação)

📘 Criar documentação Swagger
