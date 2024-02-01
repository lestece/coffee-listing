import "./Card.css";

export default function Card({ coffee }) {
  return (
    <div className="Card-container">
      <img src={coffee.image} alt="" />
      {coffee.popular == true ? <p className="Popular">Popular</p> : ""}
      <div className="Name-price">
        <h2>{coffee.name}</h2>
        <p>{coffee.price}</p>
      </div>
      <div className="Rating-availability">
        <p className="Rating-votes">
          ⭐<span className="Rating">{coffee.rating}</span> ({coffee.votes}{" "}
          votes)
        </p>
        {coffee.available == false ? <p className="Soldout">Sold out</p> : ""}
      </div>
    </div>
  );
}
