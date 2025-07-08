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
          perPage: 3,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          gap: '1rem',
        }}
        aria-label="Imagens de exemplo"
      >
        <SplideSlide>
          <img src="/img/1.jpg" alt="Gatinho 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/5.jpg" alt="Gatinho 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/3.jpg" alt="Gatinho 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/6.jpg" alt="Gatinho 4" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
