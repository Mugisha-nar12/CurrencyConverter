import React from "react";
import NewsHeader from "../components/news/NewsHeader";
import LiveMarketAlerts from "../components/news/LiveMarketAlerts";
import NewsCategories from "../components/news/NewsCategories";
import NewsFeed from "../components/news/NewsFeed";
import UpcomingEconomicEvents from "../components/news/UpcomingEconomicEvents";

function NewsAndAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <NewsHeader />
        <LiveMarketAlerts />
        <NewsCategories />
        <NewsFeed />
        <UpcomingEconomicEvents />
      </div>
    </div>
  );
}

export default NewsAndAnalysisPage;
