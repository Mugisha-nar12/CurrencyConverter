# Currency Converter

This is a simple yet powerful currency converter application built with React. It allows you to convert between different currencies using real-time exchange rates, add favorite currency pairs, and view live exchange rates.

## Features

*   **Real-time Currency Conversion:** Convert any amount from one currency to another using the latest exchange rates.
*   **Favorite Currency Pairs:** Add and save your most-used currency pairs for quick access.
*   **Live Exchange Rates:** View a list of live exchange rates for various currency pairs.
*   **Swap Currencies:** Easily swap the "from" and "to" currencies with a single click.
*   **User-Friendly Interface:** A clean and intuitive interface built with Tailwind CSS.

## How it Works

The application fetches the latest exchange rates from the [FreeCurrencyAPI](https://freecurrencyapi.com/) and uses them to perform currency conversions. The data is fetched when the application loads and is also used to update the rates for your favorite currency pairs.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For routing and navigation within the application.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Font Awesome:** A popular icon set and toolkit.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Mugisha-nar12/CurrencyConverter.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your API key from [FreeCurrencyAPI](https://freecurrencyapi.com/):
    ```
    VITE_EXCHANGE_RATE_API_KEY=your_api_key
    ```
4.  Run the app
    ```sh
    npm run dev
    ```