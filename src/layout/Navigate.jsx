import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Footer from "./Footer";
import Header from "./Header";
import { Stack } from "@mui/material";
import HomeScreen from "../screens/HomeScreen";
import CoinScreen from "../screens/CoinScreen";
import Footer from "./Footer";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Header />
      <Stack direction="row">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/coin/:id" element={<CoinScreen />} />
        </Routes>
      </Stack>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigate;
