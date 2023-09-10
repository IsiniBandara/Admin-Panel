/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import MapContainer from "../../components/map/MapContainer";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { data } = useFetch("/api/nestingSiteTrend");

  const [totalNest, setTotalNest] = useState();
  const [totalHatchling, setHatchling] = useState();
  const [succssNest, setSuccessNest] = useState();

  let nestC = 0;
  let hatchC = 0;
  let successNest = 0;

  useEffect(() => {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        nestC += data[i].nestCount;
        hatchC += data[i].hatchlingCount;
        successNest += data[i].success;
      }
      setTotalNest(nestC);
      setHatchling(hatchC);
      setSuccessNest(successNest);
    }
  }, [data, totalNest, totalHatchling, succssNest]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" value={totalNest} />
          <Widget type="order" value={totalHatchling} />
          <Widget
            type="earning"
            value={((succssNest / data.length) * 100).toFixed(2)}
          />
          <Widget type="balance" value={data.length} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Nesting Trends" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Nesting Location in Sri Lanka</div>
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
