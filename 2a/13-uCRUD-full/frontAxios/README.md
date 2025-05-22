
---

# 🧾 Frontend - CRUD de Clientes - React+Axios

Este é um frontend React simples, atômico e funcional para consumir um backend RESTful que realiza o CRUD de clientes. Ele utiliza a biblioteca `axios` para requisições HTTP, facilitando a manipulação de respostas e erros.

## 🚀 Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white)

## 🎯 Funcionalidades

- Listagem de todos os clientes cadastrados
- Cadastro de novos clientes
- Edição de clientes existentes
- Exclusão de clientes
- Interface responsiva e organizada com CSS puro

## 🛠️ Pré-requisitos

- Node.js instalado
- Backend REST em execução (porta padrão: `http://localhost:3000/clientes`)
  - Backend sugerido: Node + Express + MySQL

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
npm install
npm run dev
````

O frontend será iniciado em `http://localhost:5173` (padrão do Vite).

## 🧪 Estrutura de diretórios

```
src/
├── App.jsx         # Componente principal com lógica do CRUD
├── App.css         # Estilização com CSS puro
├── index.css       # Estilo global
├── main.jsx        # Entrada da aplicação
```

## 🔗 Backend recomendado

Este projeto espera que você tenha um backend rodando com as seguintes rotas:

* `GET /clientes`
* `GET /clientes/:id`
* `POST /clientes`
* `PUT /clientes/:id`
* `DELETE /clientes/:id`

## 📄 Licença

Este projeto está sob a licença MIT.

---

Feito com 💙 por [rafaellindemann](https://github.com/rafaellindemann)



---


