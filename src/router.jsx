import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import MarketTrend from "./pages/MarketTrend";
import NewsAndAnalysisPage from "./pages/NewsAndAnalysisPage";
import AboutPage from "./pages/AboutPage";
import Settings from "./pages/SettingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/market",
        element: <MarketTrend />,
      },
      {
        path: "/News",
        element: <NewsAndAnalysisPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
