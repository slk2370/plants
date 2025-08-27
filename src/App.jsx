import { useState } from "react";
import Header from "./components/Header.jsx";
import PlantsGrid from "./components/Plants/PlantsGrid.jsx";
import Cart from "./components/Cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== plantId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === plantId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <PlantsGrid onAddToCart={addToCart} />
        <Cart cart={cart} onUpdateQuantity={updateQuantity} />
      </main>
    </div>
  );
}
