export default function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-emoji">{item.image}</span>
        <span className="cart-name">{item.name}</span>
      </div>
      <div className="cart-controls">
        <button
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
