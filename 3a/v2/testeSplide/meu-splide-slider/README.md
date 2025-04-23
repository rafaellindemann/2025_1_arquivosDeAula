# demo da lib splide para carousel

https://splidejs.com/


---


A lib [SplideJS](https://splidejs.com/) é ótima — leve, flexível e fácil de integrar com React. Vou criar um exemplo completo de um projeto React + Vite que usa o Splide para exibir **2 imagens por vez**, com **autoplay**, **setas**, e **pontos de navegação** ativados.

---

### 🚀 Passo a passo para criar o demo com SplideJS + React + Vite

---

#### 📁 1. Inicialize o projeto Vite + React
```bash
npm create vite@latest meu-splide-slider --template react
cd meu-splide-slider
npm install
```

#### 📦 2. Instale o Splide
```bash
npm install @splidejs/react-splide
```

---

#### ✏️ 3. Edite o `App.jsx`

```jsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo do SplideJS com React</h1>

      <Splide
        options={{
          type: 'loop',
          perPage: 2,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          gap: '1rem',
        }}
        aria-label="Imagens de exemplo"
      >
        <SplideSlide>
          <img src="https://placekitten.com/400/300" alt="Gatinho 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/401/300" alt="Gatinho 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/402/300" alt="Gatinho 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/403/300" alt="Gatinho 4" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
```

---

#### 🎨 4. Adicione estilo no `App.css` (opcional)

```css
.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
}

img {
  width: 100%;
  border-radius: 12px;
}
```

---

#### ▶️ 5. Rode o projeto
```bash
npm run dev
```

---

