import { useEffect, useState } from "react";
import Card from "./Card";
import "./Collection.css";

export default function Collection() {
  const [coffees, setCoffees] = useState([]);
  console.log(coffees);

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
  return (
    <div className="Main">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <button onClick={fetchAllCoffees}>All Products</button>
      <button onClick={availableCoffees}>Available Now</button>
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
