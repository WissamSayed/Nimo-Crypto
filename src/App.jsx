import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";

import WebFont from "webfontloader";
import Navigate from "./layout/Navigate";

const secondaryColorCode = "#35af00";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: secondaryColorCode,
        main: secondaryColorCode,
        dark: secondaryColorCode,
        contrastText: "#F0F9E3",
      },

      secondary: {
        light: "#ffeb3b",
        main: "#ffeb3b",
        dark: "#ffeb3b",
        contrastText: "#000",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    // components: {
    //   MuiSelect: {
    //     styleOverrides: {
    //       root: {
    //         backgroundColor: "white", // Primary background color
    //         color: "black", // Text color
    //         border: "2px solid #BFBFBF", // Border color
    //         fontFamily: "Livvic, sans-serif",
    //         fontWeight: "500",
    //         borderRadius: "5px", // Border radius
    //         "&:hover": {
    //           backgroundColor: "#F5E1A9", // Darker background on hover
    //           color: "black",
    //         },
    //         // Remove default border color if necessary
    //         "& fieldset": {
    //           borderColor: "transparent", // Ensure the default border is not applied
    //         },
    //       },
    //       icon: {
    //         color: "black", // Color of the dropdown icon
    //       },
    //     },
    //   },
    //   MuiMenu: {
    //     styleOverrides: {
    //       paper: {
    //         backgroundColor: "#314b5a", // Ensure background color of the menu
    //         color: "#10b981", // Text color in the menu
    //         fontFamily: "Livvic",
    //       },
    //     },
    //   },
    //   MuiMenuItem: {
    //     styleOverrides: {
    //       root: {
    //         fontFamily: "Livvic",
    //         backgroundColor: "#314b5a !important", // Default background color
    //         color: "#10b981 !important", // Default text color
    //         "&:hover": {
    //           backgroundColor: "#10b981 !important", // Hover background color
    //           color: "#314b5a !important", // Hover text color
    //         },
    //         "&:focus": {
    //           backgroundColor: "#f5e1a9 !important", // Focus background color
    //           color: "#314b5a !important", // Focus text color
    //           // outline: "3px solid #10b981", // Focus outline (optional)
    //         },
    //         "&.Mui-disabled": {
    //           backgroundColor: "white !important", // Disabled background color
    //           color: "black !important", // Disabled text color
    //         },
    //       },
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       root: {
    //         background: "white",
    //         "&.Mui-focused": {
    //           background: "#F5E1A9", // Border color when focused
    //         },
    //       },
    //     },
    //   },

    //   MuiTableCell: {
    //     styleOverrides: {
    //       root: {
    //         color: "black", // Default cell color
    //         textAlign: "center",
    //         background: "white",
    //         fontFamily: "Livvic, sans-serif",
    //         fontWeight: "500",
    //       },
    //       head: {
    //         color: "#10b981", // Header cell color
    //         fontWeight: "bold",
    //         background: "#314B5A",
    //         fontFamily: "Livvic, sans-serif",
    //       },
    //     },
    //   },
    // },
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:400,500,600,700"],
      },
    });
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigate />
      </ThemeProvider>
    </div>
  );
}
export default App;
