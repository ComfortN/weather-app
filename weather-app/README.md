# Weather App

A feature-rich weather application built using React and Material-UI. This app allows users to get current weather information and forecasts for their chosen locations, switch between Celsius and Fahrenheit units, and receive severe weather alerts. The app also includes features like offline access, cookies consent, and a Terms and Conditions modal.

## Features

* Current Weather & Forecasts: Get up-to-date weather data for your selected location, including hourly and daily forecasts.
* Unit Switching: Easily switch between Celsius and Fahrenheit.
* Location Detection: Automatically detect and display weather for the user's current location.
* Severe Weather Alerts: Receive notifications for severe weather conditions.
* Offline Access: View the last fetched weather data even when offline.
* Cookies Consent: Display a cookies consent banner to users with options to accept or reject.
* Terms and Conditions: Show a modal with the app’s terms and conditions, requiring user acceptance.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```
    git clone https://github.com/ComfortN/weather-app.git
    cd weather-app
```

2. Install dependencies:

```
    npm install
```

3. Start the app:

```
    npm start
    
```

The app will be available at http://localhost:3000/.

## Usage

1. Selecting a City: Use the search bar to enter a city name. The app will display current weather and forecasts for the chosen city.
2. Unit Switching: Toggle between °C and °F using the unit switcher.
3. Cookies Consent: Accept or reject cookies through the consent banner.
4. View Terms and Conditions: Access the terms and conditions via the link in the cookies consent banner or a dedicated button.
5. Offline Mode: When offline, the app will show the last fetched weather data from local storage.

## Technologies Used

* React: Front-end library for building the user interface.
* Material-UI (MUI): Component library for styling and UI elements.
* JavaScript
* CSS: Styling for custom components.
* React Router: For handling client-side routing.
* Open Weather API: For the weather data.

