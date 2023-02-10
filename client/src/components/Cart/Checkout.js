import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
//Check Empty Fields
const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  //State to set user Validity
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
  });

  //Accepting User input using UseRef hook
  const nameInputRef = useRef();
  const streetInputRef = useRef();

  const confirmHandler = (event) => {
    //Prevent browser to sent http request
    event.preventDefault();
    //Validation on User Data
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
    });
  };
  //Feedback for invalid Entered Data
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
