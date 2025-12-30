import { useEffect } from "react";

export default function Petals() {
  useEffect(() => {
    const container = document.querySelector(".petals-container");

    const createPetal = () => {
      const petal = document.createElement("span");
      petal.className = "petal";

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 6 + Math.random() * 6 + "s";
      petal.style.opacity = Math.random();
      petal.style.transform = `scale(${0.6 + Math.random()})`;

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 12000);
    };

    const interval = setInterval(createPetal, 300);

    return () => clearInterval(interval);
  }, []);

  return <div className="petals-container"></div>;
}
