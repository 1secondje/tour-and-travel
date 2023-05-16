const DestCard = ({ card }) => {
  return (
    <div className="destinations__cards">
      {card.map((item) => {
        return (
          <div className="destinations__card" data-aos='zoom-in'>
            <img src={require(`../../Assets/${item.img}`)} alt="" />
            <div className="destinations__card-block">
              <div className="destinations__card-country">{item.country}</div>
              <div className="destinations__card-city">{item.city}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestCard;
