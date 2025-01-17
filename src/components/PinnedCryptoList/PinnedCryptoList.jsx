/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import PinnedCryptoCard from "./PinnedCryptoCard";

const PinnedCryptoList = ({ allCoins, togglePinnedStatus }) => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid>Pin List</Grid>
      <Grid item container gap="10px" direction="row">
        {allCoins?.length > 0 &&
          allCoins
            ?.filter((coin) => coin.pinned)
            .map((coin) => (
              <PinnedCryptoCard
                key={coin.id}
                data={coin}
                togglePinnedStatus={togglePinnedStatus}
              />
            ))}
      </Grid>
    </Grid>
  );
};

export default PinnedCryptoList;
