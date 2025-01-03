import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "../Assets/Styles/Header.module.css";
import { Grid, Modal, Slide, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../components/WindowsDimensions/WindowsDimensions";
import GreyDivider from "../components/UtilsComponents/GreyDivider";
import logo from "../assets/images/coingecko-logo.png";
import CandySVG from "../assets/images/candy_notification.svg";
import StarSVG from "../assets/images/star.svg";
import { LinkStyle, primaryColor, secondaryColor } from "../config/constants";

const Header = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(isOpen);

  useEffect(() => {
    if (prevOpen.current && !isOpen) {
      anchorRef.current?.focus();
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleHover = (e) => (e.target.style.color = secondaryColor);
  const handleLeave = (e) => (e.target.style.color = primaryColor);

  const renderLinks = () =>
    ["Cryptocurrencies", "Exchanges", "NFT", "Learn", "Products"].map(
      (label) => (
        <Grid
          key={label}
          item
          style={LinkStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {label}
        </Grid>
      )
    );

  const renderIconLinks = () =>
    [
      { icon: CandySVG, label: "Candy" },
      { icon: StarSVG, label: "Portfolio" },
    ].map(({ icon, label }) => (
      <Grid
        key={label}
        item
        style={{
          ...LinkStyle,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={icon} alt={`${label}-icon`} width="12px" />
        <span onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          {label}
        </span>
      </Grid>
    ));

  return (
    <>
      {width > 1054 ? (
        <Grid container justifyContent="center" paddingTop={5} gap={2}>
          <GreyDivider />
          <Grid
            container
            md={11}
            lg={10}
            xl={8}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid container gap={2} alignItems="center">
                <Grid item marginRight={2}>
                  <Link to="/">
                    <img src={logo} alt="logo" width="135px" />
                  </Link>
                </Grid>
                {renderLinks()}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container gap={2}>
                {renderIconLinks()}
              </Grid>
            </Grid>
          </Grid>
          <GreyDivider />
        </Grid>
      ) : (
        <Grid
          container
          className={classes["headerContainer"]}
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <GreyDivider />
          <Grid item marginLeft={4}>
            <MenuIcon sx={{ color: primaryColor }} onClick={toggleMenu} />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <Slide
                direction="right"
                in={isOpen}
                className={classes["headerMenuPage"]}
              >
                <Grid container direction="column" alignItems="center">
                  <Grid container justifyContent="flex-end" padding={4}>
                    <IconButton onClick={() => setIsOpen(false)}>
                      <CloseIcon
                        sx={{ color: primaryColor }}
                        fontSize="medium"
                      />
                    </IconButton>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={7}
                  >
                    {renderLinks()}
                  </Grid>
                </Grid>
              </Slide>
            </Modal>
          </Grid>
          <Grid item>
            <Link to="/">
              <img src={logo} alt="logo" width="135px" />
            </Link>
          </Grid>
          <GreyDivider />
        </Grid>
      )}
    </>
  );
};

export default Header;
