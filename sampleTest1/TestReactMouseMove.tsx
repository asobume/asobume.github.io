import React, { useEffect, useState } from "react";
<!-- import "./styles.css"; -->

export default function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div className="App">
      <div className="inspector">
        <ul>
          <li>mouseX : {mouseX}</li>
          <li>mouseY : {mouseY}</li>
        </ul>
      </div>
      <div
        className="pointer"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>
      <div
        className="pointer is-small"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>
      <main>
        <header>
          <h1>react 追従サンプル</h1>
        </header>
      </main>
    </div>
  );
}
