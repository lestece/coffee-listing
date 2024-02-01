export default function Card({ coffee }) {
  return (
    <div>
      <img src={coffee.image} alt="" />
      {coffee.popular == true ? <p>popular</p> : ""}
      <h2>{coffee.name}</h2>
      <p>{coffee.price}</p>
      <p>
        ⭐{coffee.rating} ({coffee.votes} votes)
      </p>
      {coffee.available == false ? <p>Sold out</p> : ""}
    </div>
  );
}
