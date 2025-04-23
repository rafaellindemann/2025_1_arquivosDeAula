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
