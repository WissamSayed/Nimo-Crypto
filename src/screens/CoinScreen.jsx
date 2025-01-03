/* eslint-disable react/prop-types */
import { Grid, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import CoinCard from "../components/CoinComponents/CoinCard";
import CoinChart from "../components/CoinComponents/CoinChart";
import { useEffect, useState } from "react";
import { getCoinById } from "../Nimo-services.proxy";
import Loader from "../components/UtilsComponents/Loader";

const CoinScreen = () => {
  const params = useParams();
  const { id: coinId } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    setIsLoading(true);

    getCoinById(coinId)
      .then((coin) => {
        setCoinData(coin);
      })
      .catch((err) => {
        console.log(err);
        alert("Error in fetching the coin data");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Grid item container justifyContent="center" marginTop={12}>
      <Loader Load={isLoading} />
      <Grid item container md={11} lg={10} xl={8} gap={4} direction="row">
        <Grid item xs={12} sm={12} md={12} lg={4.5}>
          <Grid item container direction="column">
            <Grid item>
              {isLoading ? (
                <Grid item xs={12} sx={{ width: 500 }}>
                  {Array.from({ length: 13 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      width="100%"
                      height={40}
                    />
                  ))}
                </Grid>
              ) : (
                <CoinCard coinData={coinData} />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ borderLeft: " 0.5px solid lightgrey" }}></Grid>
        <Grid item xs={12} sm={12} md={12} lg={6.5}>
          <Grid item container>
            {isLoading ? (
              <Grid item xs={12} sx={{ width: 500 }}>
                {Array.from({ length: 13 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    animation="wave"
                    width="100%"
                    height={40}
                  />
                ))}
              </Grid>
            ) : (
              <CoinChart coinData={coinData} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinScreen;
