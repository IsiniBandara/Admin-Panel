import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Chart = ({ aspect, title }) => {
  const { data } = useFetch("/api/nestingSiteTrend");
  const [charData, setChartData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      // Check if data is an array
      const chartData = data.map((resItem, index) => {
        const hatchlingCount = resItem.hatchlingCount || 0;
        const year = resItem.year;
        return {
          name: year,
          Total: hatchlingCount,
        };
      });

      setChartData(chartData); // Update charData state
    }
  }, [data]);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={charData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0071c2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0071c2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#0071c2"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
