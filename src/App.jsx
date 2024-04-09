import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [todayData, setTodayData] = useState({});
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const debounceTimeout = useRef();
  let include;

  const styles = {
    darkMain:{
      backgroundColor : '#272626',
      color : 'white'
    },
    darkweather:{
      backgroundColor: '#555353'
    },
    darkNav:{
      backgroundColor: '#555353'
    },
    lightImg:{
      filter: 'invert(1)'
    },
    lightLogo:{
      filter: 'invert(0)'
    },
    darkcontent:{
      backgroundColor : '#555353',
      color : 'white'
    }
  }

  if (window.location.pathname === "/") {
    include = "current";
  } else if (window.location.pathname === "/Hourly") {
    include = "hours";
  } else if (window.location.pathname === "/Daily") {
    include = "days";
  }
  const dayConditions = [
    {
      src: "./images/snowy-day.svg",
      phrase: "Snowy Day",
    },
    {
      src: "./images/clear.svg",
      phrase: "Clear Day",
    },
    {
      src: "./images/cloudy.svg",
      phrase: "Cloudy Day",
    },
    {
      src: "./images/cloudy-day.svg",
      phrase: "Partily Cloudy Day",
    },
  ];
  const nightConditions = [
    {
      src: "./images/snowy-night.svg",
      phrase: "Snowy Night",
    },
    {
      src: "./images/night.svg",
      phrase: "Clear Night",
    },
    {
      src: "./images/cloudy.svg",
      phrase: "Cloudy Night",
    },
    {
      src: "./images/cloudy-night.svg",
      phrase: "Partily Cloudy Night",
    },
  ];
  function getWeatherCondition(filter, conditions) {
    let src, phrase;
    if (filter?.snow > 0) {
        src = conditions[0].src;
        phrase = conditions[0].phrase;
    } else if (filter?.cloudcover < 20) {
        src = conditions[1].src;
        phrase = conditions[1].phrase;
    } else if (filter?.cloudcover >= 20 && filter?.cloudcover < 80) {
        src = conditions[3].src;
        phrase = conditions[3].phrase;
    } else if (filter?.cloudcover >= 80) {
        src = conditions[2].src;
        phrase = conditions[2].phrase;
    }
    return { src, phrase };
}
  useEffect(() => {
    const fetchData = async () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(async () => {
        const weatherData = await fetchWeatherData(); 
        setTodayData(weatherData);
        console.log(weatherData);
      }, 500);
    };
    
    // if (search) {
      fetchData();
    // }
  }, [search, include]);

  const fetchWeatherData = async () => {
    const todayWeatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
        search || 'jaipur'
      }?unitGroup=metric&include=${include}&key=${apiKey}&contentType=json`
    );
    const response = await todayWeatherData.json();
    return response;
  };

  return (
    <Router>
    <div className="main" style={darkMode ? styles.darkMain : {}}>
      <Nav search={search} setSearch={setSearch} darkMode={darkMode} setDarkMode={setDarkMode} styles={styles} />
      <ScrollToTop darkMode={darkMode} styles={styles}/>
      <Routes>
      <Route exact path="/" element={<Today data={todayData} dayConditions={dayConditions} nightConditions={nightConditions} getWeatherCondition={getWeatherCondition} styles={styles} darkMode={darkMode}/>}
          />

      <Route exact path="/Hourly" element={<Hourly data={todayData} dayConditions={dayConditions} nightConditions={nightConditions} getWeatherCondition={getWeatherCondition} styles={styles} darkMode={darkMode}/>}/>
      <Route exact path="/Daily" element={<Daily data={todayData} dayConditions={dayConditions} getWeatherCondition={getWeatherCondition} styles={styles} darkMode={darkMode}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
