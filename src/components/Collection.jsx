import { useEffect, useState } from "react";
import Card from "./Card";

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
    <div>
      <h1>Coffee list</h1>
      <button onClick={fetchAllCoffees}>All</button>
      <button onClick={availableCoffees}>Available Only</button>
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
