/* eslint-disable react/prop-types */
import classes from "../../assets/styles/Loader.module.css";
import { Grid } from "@mui/material";

const Loader = ({ Load }) => {
  return (
    <>
      {Load ? (
        <Grid className={classes["loader-overlay"]}>
          <Grid className={classes["loader"]}></Grid>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
