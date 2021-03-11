import React from "react";
import "./style.css";
import Card from "./components/Card";
import apiData from "./services/service_api.js";

export default function App() {
  return (
    <div>
      <div className="header">Top 5 TV Series</div>
      <div className="cards">
        <Card
          posterImg={apiData[0].posterImg}
          seriesCategory={apiData[0].seriesCategory}
          seriesTitle={apiData[0].seriesTitle}
          toWatch={apiData[0].toWatch}
        />
        <Card
          posterImg={apiData[1].posterImg}
          seriesCategory={apiData[1].seriesCategory}
          seriesTitle={apiData[1].seriesTitle}
          toWatch={apiData[1].toWatch}
        />
        <Card
          posterImg={apiData[2].posterImg}
          seriesCategory={apiData[2].seriesCategory}
          seriesTitle={apiData[2].seriesTitle}
          toWatch={apiData[2].toWatch}
        />
        <Card
          posterImg={apiData[3].posterImg}
          seriesCategory={apiData[3].seriesCategory}
          seriesTitle={apiData[3].seriesTitle}
          toWatch={apiData[3].toWatch}
        />
        <Card
          posterImg={apiData[4].posterImg}
          seriesCategory={apiData[4].seriesCategory}
          seriesTitle={apiData[4].seriesTitle}
          toWatch={apiData[4].toWatch}
        />
        <Card
          posterImg={apiData[4].posterImg}
          seriesCategory={apiData[4].seriesCategory}
          seriesTitle={apiData[4].seriesTitle}
          toWatch={apiData[4].toWatch}
        />
        <Card
          posterImg={apiData[4].posterImg}
          seriesCategory={apiData[4].seriesCategory}
          seriesTitle={apiData[4].seriesTitle}
          toWatch={apiData[4].toWatch}
        />
      </div>
    </div>
  );
}
