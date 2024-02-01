export default function Card({ coffee }) {
  return (
    <div>
      <img src={coffee.image} alt="" />
      <h2>{coffee.name}</h2>
      <p>{coffee.price}</p>
      <p>
        ⭐{coffee.rating} ({coffee.votes} votes)
      </p>
    </div>
  );
}
