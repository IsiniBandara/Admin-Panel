import React, { useState } from "react";
import { useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import useFetch from "../../hooks/useFetch";

const COLORS = ["#FF5733", "#32A852", "#FFC300", "#6E5FF5", "#FF8533"]; // Example color values

const TurtlePieChart = () => {
  const { data } = useFetch("/api/speciesNesting");
  const [pieData, setPieData] = useState([]);
  let totalNestCount = 0;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percentage,
    index,
  }) => {
    if (pieData.length === 0) {
      return null; // Return nothing if pieData is not populated yet
    }

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${pieData[index].name} ${percentage.toFixed(2)}%`}
      </text>
    );
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalNestCount += data[i].nestCount;
      }
      const calculatedPieData = data.map((resItem, index) => {
        const nestCount = (resItem.nestCount / totalNestCount) * 100 || 0;
        const species = resItem.species;
        return {
          name: species,
          percentage: nestCount,
        };
      });
      setPieData(calculatedPieData);
    }
  }, [data]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="percentage"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default TurtlePieChart;
