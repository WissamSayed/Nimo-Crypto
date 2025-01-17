/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import { Star } from "lucide-react";
import TableChart from "./TableChart";
import { Link } from "react-router-dom";
import {
  BuyButtonStyle,
  CoinAbbreviation,
  StyledTableCellColumnNumbers,
  StyledTableCellRow,
  StyledTableCellRowRight,
  textStyle,
} from "../../config/constants";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CryptoTable = ({
  allCoins,
  coinsParam,
  setCoinsParam,
  togglePinnedStatus,
}) => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: num < 1 ? 4 : 2,
      maximumFractionDigits: num < 1 ? 4 : 2,
      notation: num > 1000000 ? "compact" : "standard",
      compactDisplay: "short",
    }).format(num);
  };

  const formatPercentage = (num) => {
    const color = num >= 0 ? "green" : "red";
    const Arrow = num >= 0 ? ArrowDropUpIcon : ArrowDropDownIcon;
    return (
      <Grid container sx={{ color: { color } }} justifyContent="center">
        <Grid item>
          <Arrow fontSize="small" />
        </Grid>
        <Grid item>{Math.abs(num).toFixed(1)}%</Grid>
      </Grid>
    );
  };
  const chartColor = (num) => {
    const color = num >= 0 ? "green" : "red";
    return color;
  };

  return (
    <Grid container gap={2}>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", border: "none" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Grid
                  container
                  sx={{ cursor: "pointer" }}
                  alignItems="center"
                  direction="row"
                  style={{ minWidth: "40px" }}
                  onClick={() => {
                    if (coinsParam.order === "market_cap_desc") {
                      setCoinsParam({ ...coinsParam, order: "market_cap_asc" });
                    } else {
                      setCoinsParam({
                        ...coinsParam,
                        order: "market_cap_desc",
                      });
                    }
                  }}
                >
                  <Grid item>
                    {coinsParam.order === "market_cap_desc" ? (
                      <ArrowDropUpIcon />
                    ) : coinsParam.order === "market_cap_asc" ? (
                      <ArrowDropDownIcon />
                    ) : null}{" "}
                  </Grid>
                  <Grid item>#</Grid>
                </Grid>
              </TableCell>
              <StyledTableCellRow>Coin</StyledTableCellRow>
              <StyledTableCellRowRight align="right">
                Price
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                1h
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                24h
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                7d
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                24h Volume
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                Market Cap
              </StyledTableCellRowRight>
              <StyledTableCellRowRight align="right">
                Last 7 Days
              </StyledTableCellRowRight>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCoins ? (
              <>
                {allCoins?.map((crypto) => (
                  <TableRow key={crypto.id} hover fontSize="5px">
                    <TableCell>
                      <Grid
                        onClick={() => togglePinnedStatus(crypto.id)}
                        sx={{ color: crypto.pinned ? "gold" : "black" }}
                      >
                        <Star
                          width="16px"
                          sx={{
                            transition: "color 0.3s ease", // Smooth transition for color change
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on Grid
                              cursor: "pointer",
                            },
                          }}
                        />
                      </Grid>
                    </TableCell>
                    <TableCell>
                      <Grid>{crypto.market_cap_rank} </Grid>
                    </TableCell>
                    <TableCell style={{ minWidth: "200px" }}>
                      <Link
                        to={`/coin/${crypto.id}`}
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <Grid
                          container
                          //   direction="row"
                          spacing={1}
                          alignItems="center"
                          direction="row"
                        >
                          <Grid item>
                            <img
                              src={crypto.image}
                              alt={crypto.name}
                              width={25}
                            />
                          </Grid>
                          <Grid item>{crypto.name}</Grid>
                          <Grid item style={CoinAbbreviation}>
                            {crypto.symbol.toUpperCase()}
                          </Grid>
                        </Grid>
                      </Link>
                    </TableCell>

                    <StyledTableCellColumnNumbers style={{ minWidth: "130px" }}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <button style={BuyButtonStyle}>Buy</button>
                        </Grid>
                        <Grid item>{formatNumber(crypto.current_price)}</Grid>
                      </Grid>
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers style={{ minWidth: "70px" }}>
                      {formatPercentage(
                        crypto.price_change_percentage_1h_in_currency || 0
                      )}
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers style={{ minWidth: "70px" }}>
                      {formatPercentage(crypto.price_change_percentage_24h)}
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers style={{ minWidth: "70px" }}>
                      {formatPercentage(
                        crypto.price_change_percentage_7d_in_currency || 0
                      )}
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers>
                      {formatNumber(crypto.total_volume)}
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers>
                      {formatNumber(crypto.market_cap)}
                    </StyledTableCellColumnNumbers>
                    <StyledTableCellColumnNumbers>
                      <Link to={`/coin/${crypto.id}`}>
                        <TableChart
                          marketData={{
                            current_price: crypto.current_price,
                            high_24h: crypto.high_24h,
                            low_24h: crypto.low_24h,
                            last_updated: crypto.last_updated,
                            color: chartColor(
                              crypto.price_change_percentage_7d_in_currency
                            ),
                          }}
                        />
                      </Link>
                    </StyledTableCellColumnNumbers>
                  </TableRow>
                ))}
              </>
            ) : (
              <>ERROR 400</>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        justifyContent={{
          xs: "center",
          md: "space-between",
        }}
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        gap={3}
      >
        <Grid item style={{ ...textStyle, fontSize: "12px" }}>
          Showing {coinsParam.page} to 100 of 16395 results
        </Grid>
        <Grid item>
          <Pagination
            count={164}
            color="primary"
            shape="rounded"
            onChange={(event, pageNumber) => {
              setCoinsParam({ ...coinsParam, page: pageNumber });
            }}
          />
        </Grid>
        <Grid item>
          <Grid item container alignItems="center" gap={1}>
            <Grid item style={textStyle}>
              Rows
            </Grid>
            <Grid item>
              <Select
                size="small"
                value={coinsParam.perPage}
                onChange={(e) => {
                  setCoinsParam({ ...coinsParam, perPage: e.target.value });
                }}
              >
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={250}>250</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoTable;
