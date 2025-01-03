import { Box, LinearProgress, styled, TableCell } from "@mui/material";

export const primaryColor = "var(--global-color)";
export const secondaryColor = "var(--global-second-color)";
export const golobalFont = `var(--global-headers-font)`;
export const labelColors = "var(--global-color)";

export const NavStyle = {
  display: "flex",
  alignItems: "center",
  padding: "16px",
  borderBottom: "1px solid #e5e7eb",
  fontFamily: `${golobalFont}`,
};

export const LinkStyle = {
  marginRight: "32px",
  textDecoration: "none",
  color: `${primaryColor}`,
  fontSize: "16px",
  fontWeight: 500,
  transition: "color 0.2s ease",
  cursor: "pointer",
  fontFamily: `${golobalFont}`,
};

export const PriceTag = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: theme.palette.success.light,
  fontFamily: `${golobalFont}`,
  color: theme.palette.success.main,
  padding: "4px 8px",
  borderRadius: theme.shape.borderRadius,
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
  },
}));

export const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    backgroundColor: theme.palette.success.main,
  },
}));

export const HeadingStyle = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "8px",
  color: "#111827",
  fontFamily: `${golobalFont}`,
};

export const textStyle = {
  color: `${primaryColor}`,
  fontFamily: `${golobalFont}`,
};

export const BuyButtonStyle = {
  width: "34px",
  color: secondaryColor,
  background: "none",
  border: `1px solid ${secondaryColor}`,
  padding: "2px 4px",
  fontSize: "12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontFamily: `${golobalFont}`,
};

export const StyledTableCellRow = styled(TableCell)({
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: `${golobalFont}`,
});

// Create a right-aligned variant
export const StyledTableCellRowRight = styled(TableCell)({
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: `${golobalFont}`,
  textAlign: "right",
});

export const StyledTableCellColumnNumbers = styled(TableCell)({
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: `${golobalFont}`,
  textAlign: "right",
});

export const CoinAbbreviation = {
  color: "grey",
  fontFamily: `${golobalFont}`,
  fontSize: "13px",
};

export const CoinCardStyleStatic = {
  color: "#64748B",
  fontFamily: `${golobalFont}`,
  fontSize: "14px",
  fontWeight: "500",
};

export const CoinCardStyleValue = {
  color: "black",
  fontFamily: `${golobalFont}`,
  fontSize: "14px",
  fontWeight: "600",
};

export const CoinCardTexts = {
  fontFamily: `${golobalFont}`,
  fontSize: "13px",
  color: "black",
  fontWeight: "500",
};
