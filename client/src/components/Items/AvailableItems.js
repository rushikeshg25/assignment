import Card from "../UI/Card";
import Item from "./Item/Item";
import classes from "./AvailableItems.module.css";
//Dummy items for data
const DUMMY = [
  {
    id: "m1",
    name: "Macbook",
    description: "Apple Mac",
    price: 100000,
  },
  {
    id: "m2",
    name: "Samsung S23",
    description: "Best Android Phone",
    price: 120000,
  },
  {
    id: "m3",
    name: "Samsung TV",
    description: "A large Display",
    price: 200000,
  },
  {
    id: "m4",
    name: "PowerCord",
    description: "Red Cord",
    price: 1000,
  },
  {
    id: "m5",
    name: "Water Bottle",
    description: "Water Container for your Thirst",
    price: 150,
  },
];

const AvailableItems = () => {
  //rendering list of Items in Cards
  const List = DUMMY.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.items}>
      <Card>
        <ul>{List}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
