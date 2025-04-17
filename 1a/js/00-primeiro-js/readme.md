
---

## 📘 Mini Tutorial: Interação entre HTML e JavaScript

### 🎯 Objetivo:
Criar uma página com um **botão**, e quando o usuário **clicar**, uma **mensagem aparece** na tela.

---

## 1️⃣ O arquivo HTML: `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="tratarBotao()">Clique</button>
    <script src="script.js"></script>
</body>
</html>
```

### 🔍 Explicando parte por parte:

| Linha | O que faz? |
|------|------------|
| `<!DOCTYPE html>` | Diz que o documento é um HTML moderno (HTML5). |
| `<html lang="pt-BR">` | Começa o código HTML e indica que está em português do Brasil. |
| `<head>` | Parte que guarda configurações da página, como título e codificação. |
| `<meta charset="UTF-8">` | Garante que acentos e caracteres especiais funcionem direitinho. |
| `<title>` | É o nome que aparece na aba do navegador. |
| `<body>` | Aqui vai o que aparece **visualmente** na página. |
| `<button onclick="tratarBotao()">Clique</button>` | Cria o botão. Quando clicado, **chama a função** `tratarBotao()` do JavaScript. |
| `<script src="script.js"></script>` | Diz que o arquivo chamado `script.js` tem o JavaScript da página. |

---

## 2️⃣ O arquivo JavaScript: `script.js`

```javascript
function tratarBotao(){
    alert("Clicou muito bem!")
}
```

### 🧠 O que esse código faz?

- Cria uma **função** chamada `tratarBotao`.
- Quando essa função é chamada, ela mostra um **alerta na tela** com a mensagem:  
  👉 `"Clicou muito bem!"`

### 🤔 Quando ela é chamada?
Lá no HTML, o botão tem isso:  
```html
onclick="tratarBotao()"
```
Isso significa:  
**Quando clicar**, execute a função `tratarBotao`.

---

## 🔄 Como tudo se conecta?

1. O navegador **carrega o HTML**.
2. O HTML **mostra um botão** na tela.
3. O botão tem o atributo `onclick`, que diz: **"Quando for clicado, execute essa função aqui!"**
4. A função está dentro do arquivo `script.js`, que o HTML carregou com:
```html
<script src="script.js"></script>
```
5. Quando você clica no botão, o JavaScript entra em ação e **mostra o alerta**.

---

## ✅ Resultado

- Um botão aparece na página.
- Clicando nele, o navegador mostra:
```
Clicou muito bem!
```

---
