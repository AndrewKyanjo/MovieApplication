import "./Cards.css";

const Card = ({ title, producer, rating, imageSrc, imageAlt }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-producer">Producer: {producer}</p>
      <p className="card-rating">Rating: {rating} / 10</p>
    </div>
  );
};

export default Card;
