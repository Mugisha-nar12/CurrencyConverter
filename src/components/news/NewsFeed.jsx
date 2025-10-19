import React from "react";
import NewsArticleCard from "./NewsArticleCard";

function NewsFeed() {
  const newsArticles = [
    {
      title: "Federal Reserve Signals Potential Interest Rate Changes",
      description:
        "The Federal Reserve hints at monetary policy adjustments that could significantly impact USD strength across global markets.",
      source: "Financial Times",
      time: "2 hours ago",
      impact: "high impact",
      currencies: ["USD", "EUR", "GBP"],
      link: "#",
    },
    {
      title: "European Central Bank Maintains Steady Policy Stance",
      description:
        "ECB keeps interest rates unchanged amid inflation concerns, EUR shows mixed reactions in early trading.",
      source: "Reuters",
      time: "4 hours ago",
      impact: "medium impact",
      currencies: ["EUR", "USD"],
      link: "#",
    },
    {
      title: "Brexit Negotiations Update Affects GBP Volatility",
      description:
        "Latest developments in UK-EU trade discussions cause significant movements in British Pound against major currencies.",
      source: "Bloomberg",
      time: "8 hours ago",
      impact: "high impact",
      currencies: ["GBP", "EUR", "USD"],
      link: "#",
    },
    {
      title: "Asian Markets Show Strong Recovery",
      description:
        "Japanese Yen and Chinese Yuan gain ground as Asian economies demonstrate resilience in current market conditions.",
      source: "Wall Street Journal",
      time: "8 hours ago",
      impact: "medium impact",
      currencies: ["JPY", "CNY", "KRW"],
      link: "#",
    },
    {
      title: "Oil Prices Surge Impacts Commodity Currencies",
      description:
        "Rising crude oil prices boost Canadian Dollar and Norwegian Krone against major trading partners.",
      source: "MarketWatch",
      time: "12 hours ago",
      impact: "medium impact",
      currencies: ["CAD", "NOK", "USD"],
      link: "#",
    },
    {
      title: "Cryptocurrency Regulations Affect Digital Asset Trading",
      description:
        "New regulatory frameworks in major economies create ripple effects across traditional and digital currency markets.",
      source: "CoinDesk",
      time: "1 day ago",
      impact: "high impact",
      currencies: ["BTC", "ETH", "USD"],
      link: "#",
    },
    {
      title: "Emerging Markets Currency Outlook Improves",
      description:
        "Positive economic indicators from Brazil, India, and South Africa strengthen their respective currencies.",
      source: "Financial Express",
      time: "1 day ago",
      impact: "medium impact",
      currencies: ["BRL", "INR", "ZAR"],
      link: "#",
    },
    {
      title: "Swiss National Bank Intervention Rumors",
      description:
        "Market speculation about potential SNB intervention sends Swiss Franc on a volatile trading session.",
      source: "Swiss Info",
      time: "3 days ago",
      impact: "medium impact",
      currencies: ["CHF", "EUR", "USD"],
      link: "#",
    },
  ];

  return (
    <div className="space-y-6">
      {newsArticles.map((article, index) => (
        <NewsArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsFeed;
