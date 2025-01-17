import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack } from "@mui/material";
import { Suspense, lazy } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Lazy load route components
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const CoinScreen = lazy(() => import("../screens/CoinScreen"));

const Navigate = () => {
  return (
    <BrowserRouter>
      <Header />
      <Stack direction="row">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/coin/:id" element={<CoinScreen />} />
          </Routes>
        </Suspense>
      </Stack>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigate;
