
---

# 🧠 Backend MySQL - CRUD de Clientes - Node.js + Express

Este é um backend simples e funcional em Node.js com Express e MySQL, que fornece uma API REST para operações de CRUD sobre uma tabela de clientes. Ele integra o projeto **UCRUD-FULLJS** e está localizado na pasta `backend-MySQL`.

## 🚀 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## 📁 Estrutura

```

UCRUD-FULLJS/
├── backend-MySQL/
│   ├── src/
│   │   └── server.js
│   └── package.json

````

> 📌 Certifique-se de executar os comandos a partir da pasta `backend-MySQL`.

## 📦 Instalação e Execução

```bash
cd backend-MySQL
npm install
npm start
````

O servidor será iniciado em:
🔗 `http://localhost:3000`

## 🛠️ Requisitos

* Node.js
* MySQL Server em execução local
* Banco de dados `crud_cliente_demo` com a seguinte tabela:

```sql
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(200),
  email VARCHAR(100),
  telefone VARCHAR(20)
);
```

## 🔐 Configuração de acesso ao banco

A configuração da conexão está em `src/server.js`:

```js
const pool = mysql.createPool({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'crud_cliente_demo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```

Você pode mover essas informações para um arquivo `.env` com o uso da biblioteca `dotenv`.

## 📚 Rotas disponíveis

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| GET    | `/clientes`     | Lista todos os clientes       |
| GET    | `/clientes/:id` | Retorna cliente por ID        |
| POST   | `/clientes`     | Cadastra um novo cliente      |
| PUT    | `/clientes/:id` | Atualiza um cliente existente |
| DELETE | `/clientes/:id` | Deleta um cliente do banco    |

## 🔗 Frontends compatíveis

* [`frontAxios`](../frontAxios) - React + Axios
* [`frontFetch`](../frontFetch) - React + Fetch API

## 📄 Licença

Este projeto está sob a licença MIT.

---

Feito com 💙 por [rafaellindemann](https://github.com/rafaellindemann)




