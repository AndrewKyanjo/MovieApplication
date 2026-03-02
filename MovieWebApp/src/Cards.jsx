const Card = ({ title, producer, rating, imageAlt }) => {
  return (
    <div className="card">
      <div className="card-image">
        {/* Placeholder for picture */}
        <span>🎬</span>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-producer">Producer: {producer}</p>
      <p className="card-rating">Rating: {rating} / 10</p>
    </div>
  );
};

export default Card;