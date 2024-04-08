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
  const [search, setSearch] = useState("jaipur");
  const debounceTimeout = useRef();
  let include;

  if (window.location.hostname === 'localhost' && window.location.pathname === "/") {
    include = "current";
  } else if (window.location.pathname === "/Hourly") {
    include = "hours";
  } else if (window.location.pathname === "/Daily") {
    include = "days";
  }
  const conditions = [
    {
      src: "./images/snow.png",
      phrase: "Snowy Day",
    },
    {
      src: "./images/clear.png",
      phrase: "Clear Day",
    },
    {
      src: "./images/cloudy.png",
      phrase: "Cloudy Day",
    },
    {
      src: "./images/partily-cloudy.png",
      phrase: "Partily Cloudy Day",
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
    
    if (search) {
      fetchData();
    }
  }, [search, include]);

  const fetchWeatherData = async () => {
    const todayWeatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
        search
      }?unitGroup=metric&include=${include}&key=${apiKey}&contentType=json`
    );
    const response = await todayWeatherData.json();
    return response;
  };

  return (
    <Router>
    <>
      <Nav search={search} setSearch={setSearch} />
      <ScrollToTop />
      <Routes>
      <Route exact path="/" element={<Today data={todayData} conditions={conditions} getWeatherCondition={getWeatherCondition} />}
          />

      <Route exact path="/Hourly" element={<Hourly data={todayData} conditions={conditions} getWeatherCondition={getWeatherCondition} />}/>
      <Route exact path="/Daily" element={<Daily data={todayData} conditions={conditions} getWeatherCondition={getWeatherCondition} />}/>
      </Routes>
    </>
    </Router>
  );
}

export default App;
