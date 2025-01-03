/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { golobalFont, textStyle } from "../../config/constants";

//Sample data
const cryptoData = [
  { timestamp: "2024-01-01 00:00", price: 93895.61, volume: 54726251902 },
  { timestamp: "2024-01-01 01:00", price: 95200.0, volume: 55126251902 },
  { timestamp: "2024-01-01 02:00", price: 94800.5, volume: 54926251902 },
  { timestamp: "2024-01-01 03:00", price: 95100.25, volume: 54826251902 },
  { timestamp: "2024-01-01 04:00", price: 94200.75, volume: 54626251902 },
  { timestamp: "2024-01-01 05:00", price: 93900.5, volume: 54526251902 },
  { timestamp: "2024-01-01 06:00", price: 93800.25, volume: 54426251902 },
  { timestamp: "2024-01-01 07:00", price: 93700.75, volume: 54326251902 },
  { timestamp: "2024-01-01 08:00", price: 93600.5, volume: 54226251902 },
  { timestamp: "2024-01-01 09:00", price: 94100.25, volume: 54126251902 },
  { timestamp: "2024-01-01 10:00", price: 93900.75, volume: 54026251902 },
  { timestamp: "2024-01-01 11:00", price: 93800.5, volume: 53926251902 },
  { timestamp: "2024-01-01 12:00", price: 93700.25, volume: 53826251902 },
  { timestamp: "2024-01-01 13:00", price: 93600.75, volume: 53726251902 },
  { timestamp: "2024-01-01 14:00", price: 93500.5, volume: 53626251902 },
  { timestamp: "2024-01-01 15:00", price: 93400.25, volume: 53526251902 },
  { timestamp: "2024-01-01 16:00", price: 93300.75, volume: 53426251902 },
  { timestamp: "2024-01-01 17:00", price: 93200.5, volume: 53326251902 },
  { timestamp: "2024-01-01 18:00", price: 93100.25, value: 53226251902 },
  { timestamp: "2024-01-01 19:00", price: 93000.75, volume: 53126251902 },
  { timestamp: "2024-01-01 20:00", price: 92900.5, volume: 53026251902 },
  { timestamp: "2024-01-01 21:00", price: 92800.25, volume: 52926251902 },
  { timestamp: "2024-01-01 22:00", price: 93100.75, volume: 52826251902 },
  { timestamp: "2024-01-01 23:00", price: 93000.5, volume: 52726251902 },
];

const CoinChart = () => {
  const [mainTab, setMainTab] = useState(0);
  const [timeframeTab, setTimeframeTab] = useState("24h");

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const handleTimeframeChange = (timeframe) => {
    setTimeframeTab(timeframe);
  };

  const formatXAxis = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:00`;
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}`;
  };

  const formatVolume = (volume) => {
    return `$${(volume / 1e9).toFixed(2)}B`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const date = new Date(label);
      return (
        <Paper
          elevation={3}
          square
          sx={{
            boxShadow: "none",
            border: "none",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {date.toLocaleString()}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Price: $
            {payload[0].value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
          {/* <Typography variant="body2">
            Volume: ${(payload[1].value / 1e9).toFixed(2)}B
          </Typography> */}
        </Paper>
      );
    }
    return null;
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 500,
        boxShadow: "none",
        border: "none",
      }}
    >
      <CardContent>
        {/* Main navigation tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs value={mainTab} onChange={handleMainTabChange}>
            <Tab label="Overview" style={textStyle} />
            <Tab label="Markets" style={textStyle} />
            <Tab label="News" style={textStyle} />
            <Tab label="Similar Coins" style={textStyle} />
          </Tabs>
        </Box>

        {/* Chart controls */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box>
            <ButtonGroup variant="outlined" size="small">
              <Button variant={mainTab === 0 ? "contained" : "outlined"}>
                Price
              </Button>
              <Button>Market Cap</Button>
              <Button>TradingView</Button>
            </ButtonGroup>
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {/* Chart view buttons */}

            {/* Timeframe buttons */}
            <ButtonGroup variant="outlined" size="small">
              {["24h", "7d", "1m", "3m", "1y", "Max"].map((timeframe) => (
                <Button
                  key={timeframe}
                  variant={
                    timeframeTab === timeframe ? "contained" : "outlined"
                  }
                  onClick={() => handleTimeframeChange(timeframe)}
                >
                  {timeframe}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Box>

        {/* Chart */}
        <Box sx={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <ComposedChart
              data={cryptoData}
              margin={{ top: 10, right: 20, left: -50, bottom: 0 }}
            >
              <CartesianGrid
                // strokeDasharray="3 3"
                vertical={false}
                stroke="#E0E0E0"
              />
              <XAxis
                dataKey="timestamp"
                tickFormatter={formatXAxis}
                interval="preserveStartEnd"
                minTickGap={50}
                axisLine={false}
                tick={{
                  fontSize: 12, // Control font size
                  fontFamily: "'Arial', sans-serif", // Control font family
                  fill: "#666666", // Control font color
                  fontWeight: 500, // Control font weight
                }}
              />
              <YAxis
                yAxisId="price"
                orientation="right"
                domain={["auto", "auto"]}
                tickFormatter={formatPrice}
                axisLine={false}
                tick={{
                  fontSize: 12, // Control font size
                  fontFamily: `${golobalFont}`, // Control font family
                  fill: "#666666", // Control font color
                  fontWeight: 500, // Control font weight
                }}
              />
              <YAxis
                yAxisId="volume"
                orientation="left"
                domain={["auto", "auto"]}
                tickFormatter={formatVolume}
                tick={{ fontFamily: `${golobalFont}` }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                yAxisId="price"
                type="monotone"
                dataKey="price"
                stroke="#16C784"
                fill="#E1F4ED"
                strokeWidth={3}
              />
              {/* <Bar
                yAxisId="volume"
                dataKey="volume"
                fill="#E0E0E0"
                opacity={0.1}
              /> */}
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoinChart;
