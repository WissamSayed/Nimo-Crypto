import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import GreyDivider from "../components/UtilsComponents/GreyDivider";
import { textStyle } from "../config/constants";

const Footer = () => {
  return (
    <Grid item container justifyContent="center" marginTop={20} gap={4}>
      <GreyDivider />
      <Grid
        item
        container
        xs={11}
        sm={11}
        md={11}
        lg={10}
        xl={8}
        justifyContent="space-between"
      >
        <Grid item>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ ...textStyle, fontSize: "14px", fontWeight: "600" }}
            >
              Interested to stay up-to-date with cryptocurrencies?
            </Typography>
            <Typography
              color="text.secondary"
              style={{ ...textStyle, fontSize: "13px" }}
            >
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              size="small"
              sx={{ minWidth: 250 }}
              style={{ ...textStyle, fontSize: "14px", fontWeight: "600" }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#4CAF50",
                "&:hover": {
                  bgcolor: "#45a049",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <GreyDivider />
      <Grid
        item
        container
        xs={11}
        sm={11}
        md={11}
        lg={10}
        xl={8}
        justifyContent="center"
      >
        <Grid item>
          <Typography
            variant="caption"
            color="text.secondary"
            paragraph
            style={textStyle}
          >
            <strong>IMPORTANT DISCLAIMER:</strong> All content provided herein
            our website, hyperlinked sites, associated applications, forums,
            blogs, social media accounts and other platforms {"Site"} is for
            your general information only, procured from third party sources. We
            make no warranties of any kind in relation to our content, including
            but not limited to accuracy and updatedness. No part of the content
            that we provide constitutes financial advice, legal advice or any
            other form of advice meant for your specific reliance for any
            purpose. Any use or reliance on our content is solely at your own
            risk and discretion. You should conduct your own research, review,
            analyse and verify our content before relying on them. Trading is a
            highly risky activity that can lead to major losses, please
            therefore consult your financial advisor before making any decision.
            No content on our Site is meant to be a solicitation or offer.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center" style={textStyle}>
            © 2025 CoinGecko. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
