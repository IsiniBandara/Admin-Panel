import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import TurtlePieChart from "../pieChart/TurtlePieChart";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Featured = () => {
  const { data } = useFetch("/api/speciesNesting");
  const [totalNest, setTotalNest] = useState();
  let nestC = 0;
  useEffect(() => {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        nestC += data[i].nestCount;
      }
      setTotalNest(nestC);
    }
  }, [data, totalNest]);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Species Breakdown</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <TurtlePieChart className="featuredChart" />
        {/* <div className="featuredChart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
        </div> */}

        <p className="title">Total nesting made last year</p>
        <p className="amount">{totalNest}</p>
        <p className="desc">
          Previous nesting processing. This year nesting may not be included.
        </p>
      </div>
    </div>
  );
};

export default Featured;
