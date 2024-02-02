import { useEffect, useState } from "react";
import Card from "./Card";
import "./Collection.css";

export default function Collection() {
  const [coffees, setCoffees] = useState([]);
  console.log(coffees);

  //toggle active class on button
  const [selected, setSelected] = useState("btn1");

  //https://medium.com/@64rohanmalo/fetch-and-display-data-from-an-api-with-react-228de56bb446

  //Run fetchCoffees function when page loads
  useEffect(() => {
    fetchAllCoffees();
  }, []);

  //we use async/await to fetch the coffee
  const fetchAllCoffees = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    //store the data into the coffees variable
    setCoffees(await response.json());
  };
  //filter coffees by availability
  const availableCoffees = () => {
    const available = coffees.filter((coffee) => coffee.available == true);
    setCoffees(available);
  };

  //toggle active class based on what button is clicked
  // inspired by the followinf sandbox:
  //https://codesandbox.io/p/sandbox/priceless-tamas-yjr1lw?file=%2Fsrc%2FSome.js%3A24%2C16
  const changeColor = (btn) => {
    setSelected(btn);
  };

  return (
    <div className="Main">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="Btns-container">
        <button
          id="btn1"
          onClick={() => {
            fetchAllCoffees();
            changeColor("btn1");
          }}
          className={selected === "btn1" ? "Active" : ""}
        >
          All Products
        </button>
        <button
          id="btn2"
          onClick={() => {
            availableCoffees();
            changeColor("btn2");
          }}
          className={selected === "btn2" ? "Active" : ""}
        >
          Available Now
        </button>
      </div>

      <ul>
        {coffees.map((coffee) => {
          return (
            <li key={coffee.id}>
              <Card coffee={coffee} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
