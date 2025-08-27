import CartItem from "./CartItem.jsx";

export default function Cart({ cart, onUpdateQuantity }) {
  return (
    <section className="cart-section">
      <h2>Cart</h2>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
