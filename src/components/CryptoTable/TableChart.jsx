/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const TableChart = ({ marketData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generatePricePoints = (data) => {
      const lastUpdated = new Date(data.last_updated);
      const points = [];

      for (let i = 0; i < 6; i++) {
        const timePoint = new Date(lastUpdated);
        timePoint.setHours(timePoint.getHours() - (5 - i) * 4);

        let price;
        if (i === 0) {
          price = data.low_24h;
        } else if (i === 2) {
          price = data.high_24h;
        } else if (i === 5) {
          price = data.current_price;
        } else {
          const progress = i / 5;
          if (i < 2) {
            price =
              data.low_24h + (data.high_24h - data.low_24h) * (progress * 2);
          } else {
            price =
              data.high_24h -
              (data.high_24h - data.current_price) * ((i - 2) / 3);
          }
        }

        points.push({
          timestamp: timePoint.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }),
          price: Math.round(price),
        });
      }

      return points;
    };

    const pricePoints = generatePricePoints(marketData);
    setData(pricePoints);
  }, []);
  return (
    <LineChart width={100} height={20} data={data}>
      <Line
        type="monotone"
        dataKey="price"
        stroke={marketData.color}
        strokeWidth={1.5}
        dot={false}
      />
      <XAxis dataKey="timestamp" hide={true} />
      <YAxis hide={true} domain={["dataMin", "dataMax"]} />
    </LineChart>
  );
};

export default TableChart;
