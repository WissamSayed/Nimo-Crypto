import axios from "axios";
import * as constFile from "./Nimo-constants";
const GECKO_API_KEY = "CG-vtFF6UTpbmTXWK66bWvQVPEN";

const apiConfig = {
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": GECKO_API_KEY,
    // "x-cg-demo-api-key": process.env.REACT_APP_GECKO_API_KEY,
  },
};

export const getAllCoins = async (x) => {
  try {
    const response = await axios.get(`${constFile.BASE_URL}/coins/markets`, {
      ...apiConfig,
      params: {
        vs_currency: x.vsCurrency || "usd",
        order: x.order || "market_cap_desc",
        per_page: x.perPage || 100,
        page: x.page || 1,
        price_change_percentage: "1h,24h,7d",
        locale: "en",
        sparkline: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching coins:", error.message);
    throw error;
  }
};

export const getCoinById = async (id) => {
  try {
    const response = await axios.get(`${constFile.BASE_URL}/coins/${id}`, {
      ...apiConfig,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching coins:", error.message);
    throw error;
  }
};
