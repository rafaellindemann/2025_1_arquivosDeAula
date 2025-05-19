import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 800 }, () => {
      return {
        value: Math.floor(Math.random() * 10),
        dangerous: Math.random() < 0.07 // 7% chance de ser "perigoso"
      };
    });
    setNumbers(generated);
  }, []);

  return (
    <div className="crt-screen">
      <div className="numbers-grid">
        {numbers.map((num, idx) => (
          <span
            key={idx}
            className={`number-cell ${num.dangerous ? "dangerous" : ""}`}
          >
            {num.value}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
