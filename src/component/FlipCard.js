import React from "react";
import video from "../video/Local.mp4";
const FlipCard = (props) => {
  return (
    <div className="padding-x  flip-card">
      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[0].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[0].title}</h2>
          </div>
        </a>
      </div>

      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[1].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[1].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[1].title}</h2>
          </div>
        </a>
      </div>

      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[2].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[2].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[2].title}</h2>
          </div>
        </a>
      </div>

      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[3].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[3].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[3].title}</h2>
          </div>
        </a>
      </div>

      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[4].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[4].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[4].title}</h2>
          </div>
        </a>
      </div>

      <div className="clip-card-container">
        <a
          className="clip-card-space"
          href={props.list[2].url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-front ">
            <img src={props.list[2].image} alt="新聞圖片" />
          </div>
          <div className="card-back">
            <h2>{props.list[2].title}</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FlipCard;
