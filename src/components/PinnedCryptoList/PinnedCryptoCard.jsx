/* eslint-disable react/prop-types */

import { Card, Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const PinnedCryptoCard = ({ data, togglePinnedStatus }) => {
  return (
    <Card item>
      <Grid
        item
        container
        direction="row"
        width="200px"
        height="50px"
        alignContent="center"
        margin={1}
      >
        <Grid item container>
          <Link
            to={`/coin/${data.id}`}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <>
              <Grid item>
                <img src={data.image} alt={data.name} width={25} />
              </Grid>
              <Grid item>{data.id}</Grid>
            </>
          </Link>
        </Grid>
        <Grid
          item
          xs={1}
          onClick={() => togglePinnedStatus(data.id)}
          sx={{ cursor: "pointer", color: "grey " }}
        >
          <CancelIcon />
        </Grid>
      </Grid>
    </Card>
  );
};

export default PinnedCryptoCard;
