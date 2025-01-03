/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Breadcrumbs,
  List,
  ListItem,
  IconButton,
  Tooltip,
  Card,
  CardContent,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  CoinAbbreviation,
  CoinCardStyleStatic,
  CoinCardStyleValue,
  CoinCardTexts,
  CustomLinearProgress,
  primaryColor,
} from "../../config/constants";

const formatNumber = (num) => {
  if (num === null || num === undefined) return "N/A";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
};

const formatSupply = (num) => {
  if (num === null || num === undefined) return "N/A";
  return new Intl.NumberFormat("en-US").format(num);
};

const formatPercentage = (num, type) => {
  if (num === null || num === undefined) return "N/A";
  const color = num >= 0 ? "green" : "red";
  const Arrow = num >= 0 ? ArrowDropUpIcon : ArrowDropDownIcon;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color,
      }}
    >
      <Arrow fontSize="small" />
      <Typography
        variant="body2"
        component="span"
        sx={{ fontSize: type === "top" ? 23 : 14, fontWeight: 600 }}
      >
        {Math.abs(num).toFixed(1)}%
      </Typography>
    </Box>
  );
};

const CoinCard = ({ coinData }) => {
  const stats = [
    {
      label: "Market Cap",
      value: formatNumber(coinData.market_data.market_cap.usd),
      tooltip: "Total market value of the cryptocurrency's circulating supply",
    },
    {
      label: "Fully Diluted Valuation",
      value: formatNumber(coinData.market_data.fully_diluted_valuation.usd),
      tooltip: "Market cap if the max supply was in circulation",
    },
    {
      label: "24 Hour Trading Vol",
      value: formatNumber(coinData.market_data.total_volume.usd),
      tooltip: "Total trading volume across all markets in the last 24 hours",
    },
    {
      label: "Circulating Supply",
      value: `${formatSupply(coinData.market_data.circulating_supply)}`,
      tooltip: "Amount of coins that are circulating in the market",
    },
    {
      label: "Total Supply",
      value: `${formatSupply(coinData.market_data.total_supply)} `,
      tooltip: "Total amount of coins that will ever exist",
    },
    {
      label: "Max Supply",
      value: `${formatSupply(coinData.market_data.max_supply)} `,
      tooltip: "Maximum amount of coins that will ever exist",
    },
  ];

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
        <Breadcrumbs sx={{ mb: 1 }}>
          <Typography style={CoinCardTexts}>Cryptocurrencies</Typography>
          <Typography style={{ ...CoinCardTexts, color: primaryColor }}>
            {coinData.name} Price
          </Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography component="span">
                <img
                  src={coinData.image.large}
                  alt={coinData.name.large}
                  width={25}
                />
              </Typography>
              <Typography
                component="span"
                style={{
                  ...CoinCardTexts,
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {coinData.name}
              </Typography>
              <Typography style={CoinAbbreviation}>
                {coinData.symbol.toUpperCase()} Price
              </Typography>
              <Box
                sx={{
                  bgcolor: "grey.100",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.75rem",
                }}
              >
                #{coinData.market_cap_rank}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography variant="h4" component="div" fontWeight="bold">
              {formatNumber(coinData.market_data.current_price.usd)}
            </Typography>
            {formatPercentage(
              coinData.market_data.price_change_percentage_24h,
              "top"
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography style={CoinAbbreviation}>
              {coinData.market_data.current_price.btc} BTC
            </Typography>
            {formatPercentage(
              coinData.market_data.price_change_percentage_24h_in_currency.btc
            )}
          </Box>
        </Box>

        <Box>
          <CustomLinearProgress
            variant="determinate"
            value={
              ((coinData.market_data.current_price.usd -
                coinData.market_data.low_24h.usd) /
                (coinData.market_data.high_24h.usd -
                  coinData.market_data.low_24h.usd)) *
              100
            }
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Typography variant="body2" style={CoinCardTexts}>
              {formatNumber(coinData.market_data.low_24h.usd)}
            </Typography>
            <Typography variant="body2" style={CoinCardTexts}>
              24h Range
            </Typography>
            <Typography variant="body2" style={CoinCardTexts}>
              {formatNumber(coinData.market_data.high_24h.usd)}
            </Typography>
          </Box>
        </Box>

        <List disablePadding>
          {stats.map((stat, index) => (
            <ListItem
              key={index}
              divider={index !== stats.length - 1}
              sx={{
                py: 1.5,
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body1" style={CoinCardStyleStatic}>
                  {stat.label}
                </Typography>
                <Tooltip title={stat.tooltip} placement="right">
                  <IconButton size="small" sx={{ padding: 0 }}>
                    <HelpOutlineIcon fontSize="small" color="action" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Typography variant="body1" style={CoinCardStyleValue}>
                {stat.value}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
