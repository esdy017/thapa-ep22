import React from "react";


const Card = props => {
  return (
    <div className="card">
      <img src={props.posterImg} alt="dark poster" className="card__img" />
      <div className="card_info">
        <span className="card__category">{props.seriesCategory}</span>
        <h3 className="card__title">{props.seriesTitle}</h3>
        <a href={props.toWatch} target="_blank">
          <button>WatchNow</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
