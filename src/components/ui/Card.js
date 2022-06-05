import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
  //children is a special props that holds the content between the opening and the closing tags
}

export default Card;
