import PlantCard from "./PlantCard.jsx";
import PLANTS from "../../data.js";

export default function PlantsGrid({ onAddToCart }) {
  return (
    <section className="plants-section">
      <h2>Plants</h2>
      <div className="plants-grid">
        {PLANTS.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
