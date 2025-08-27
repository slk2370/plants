export default function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-emoji">{plant.image}</div>
      <h3 className="plant-name">{plant.name}</h3>
      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(plant)}
      >
        Add to cart
      </button>
    </div>
  );
}
