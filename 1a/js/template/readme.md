
---

## 👨‍🏫 Tutorial Completo: Criando Aplicações Simples com HTML + JavaScript

### 🧠 O que vamos aprender?
- Como o HTML e o JavaScript **se conectam**.
- Como **criar botões** que executam funções.
- Como **adicionar novos exercícios** no mesmo projeto.
- Como **testar o projeto** com o Live Server.

---

## 📁 Estrutura básica do projeto

- `index.html`: Onde fica o visual da página.
- `script.js`: Onde fica a lógica dos exercícios.

---

## 🔍 Explicando o `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
</head>
<body>
    <h1>Demo</h1>
    <p>Este arquivo mostra um demo de como fazer um app simples com HTML + JS, usando prompt para entrada de dados e alert para saída.</p>

    <button onclick="somar()">Somador plus</button>
    <button onclick="subtrair()">Subtrator master</button>

    <script src="script.js"></script>
</body>
</html>
```

### 🧩 O que acontece aqui:

| Parte do código | Explicação |
|----------------|------------|
| `<button onclick="somar()">` | Cria um botão que **chama a função** `somar()` quando clicado. |
| `<button onclick="subtrair()">` | Cria outro botão que chama a função `subtrair()`. |
| `<script src="script.js"></script>` | Importa o JavaScript que está no outro arquivo. |

---

## 🔍 Explicando o `script.js`

```javascript
function somar(){
    let n1 = Number(prompt("Primeiro número: "))
    let n2 = Number(prompt("Segundo número: "))
    let soma = n1 + n2 
    alert("A soma deu: " + soma)
}

function subtrair(){
    let n1 = Number(prompt("Primeiro número: "))
    let n2 = Number(prompt("Segundo número: "))
    let diferenca = n1 - n2 
    alert("A diferença deu: " + diferenca)
}
```

### 🧠 O que esse código faz?

- Cada função pede dois números com `prompt()`.
- Depois, faz o cálculo (soma ou subtração).
- Mostra o resultado com `alert()`.

---

## ✍️ Como adicionar **novos exercícios**

### 🎯 Etapas para adicionar um novo exercício:

1. **No `script.js`**: Crie uma nova função com a lógica do exercício.
2. **No `index.html`**: Adicione um novo botão chamando essa nova função.

---

### 🔧 Exemplo: Criando um botão para multiplicar dois números

#### 1. No `script.js`:
```javascript
function multiplicar(){
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let produto = n1 * n2;
    alert("O resultado da multiplicação é: " + produto);
}
```

#### 2. No `index.html`, dentro do `<body>`:
```html
<button onclick="multiplicar()">Multiplicador pro</button>
```

📌 **Pronto!** Agora sua página terá **três botões**: somar, subtrair e multiplicar!

---

## 🚀 Dica de ouro: Use o **Live Server**

### O que é?

Uma extensão do VS Code que **abre seu HTML direto no navegador** e **atualiza automaticamente** sempre que você salva o arquivo.

### Como instalar e usar:
1. No VS Code, vá em `Extensões` (ícone de quadradinho).
2. Procure por **"Live Server"**.
3. Clique em **Instalar**.
4. Com o `index.html` aberto, clique com o botão direito e escolha **"Open with Live Server"**.

👉 Agora você consegue testar tudo rapidinho sem precisar abrir e fechar o navegador.

---

## 🎯 Conclusão

Com esse modelo, qualquer pessoa pode:

✅ Praticar o uso de funções  
✅ Usar entrada e saída de dados  
✅ Ver resultados **em tempo real**  
✅ Aprender passo a passo como HTML e JS trabalham juntos
