import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  //State variable to check whether checkout is clicked
  const [isCheckout, setIsCheckout] = useState(false);
  //Importing current state from context api
  const cartCtx = useContext(CartContext);

  //convert Number to string and String interpolation to add Rs
  const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  //remove that Item from cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //Adding item to cart
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  //Submitting Name of the User to Server using fetch
  const submitOrderHandler = (userData) => {
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     user: userData,
    //   }),
    // });
  };

  //Display the Items in the Cart
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //To show close and Order button after User selects Order for Billing and adding Address
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  //Conditionally render Buttons for Checkout
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
