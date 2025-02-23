import classes from "./Card.module.css";
//For Wrapping Components
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
