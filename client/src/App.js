import { useState } from "react";

import Header from "./components/Layout/Header";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    //Wraping whole app with context provider to get access of context states in whole app
    <CartProvider>
      {/* Conditionally render the cart*/}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
