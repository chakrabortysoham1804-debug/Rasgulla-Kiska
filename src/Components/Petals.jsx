import { useEffect, useState } from "react";

export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 20;
    const newPetals = [];

    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        size: 10 + Math.random() * 10
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`
          }}
        ></div>
      ))}
    </div>
  );
}
