/* eslint-disable react/prop-types */
import { Grid, Skeleton, Switch } from "@mui/material";
import CryptoTable from "../components/CryptoTable/CryptoTable";
import { HeadingStyle, textStyle } from "../config/constants";
import { useEffect, useState } from "react";
import { getAllCoins } from "../Nimo-services.proxy";

const HomeScreen = () => {
  const [coinsParam, setCoinsParam] = useState({
    vsCurrency: "usd",
    order: "market_cap_desc",
    perPage: 100,
    page: 1,
  });

  const [allCoins, setAllCoins] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getAllCoins(coinsParam)
      .then((coins) => {
        setAllCoins(coins);
      })
      .catch((err) => {
        console.log(err);
        alert("Error in fetching the data");
      })
      .finally(() => setIsLoading(false));
  }, [coinsParam]);

  return (
    <Grid item container justifyContent="center" marginTop={12}>
      <Grid item container xs={10} xl={8} gap={4}>
        <Grid container direction="column" spacing={1} mar>
          <Grid
            container
            item
            justifyContent={{
              xs: "center",
              md: "space-between",
            }}
            direction="row"
            alignItems="center"
          >
            <Grid item style={HeadingStyle}>
              Cryptocurrency Prices by Market Cap
            </Grid>
            <Grid item>
              <Switch />
            </Grid>
          </Grid>
          <Grid item style={textStyle}>
            The global cryptocurrency market cap today is $3.41 Trillion, a 0.4%
            change in the last 24 hours.
          </Grid>
        </Grid>
        {isLoading ? (
          <Grid item xs={12} sx={{ width: 500 }}>
            {Array.from({ length: 50 }).map((_, index) => (
              <Skeleton key={index} animation="wave" width="100%" height={60} />
            ))}
          </Grid>
        ) : (
          <CryptoTable
            allCoins={allCoins}
            coinsParam={coinsParam}
            setCoinsParam={setCoinsParam}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
