import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [todayData, setTodayData] = useState({});
  const [search, setSearch] = useState("jaipur");
  const debounceTimeout = useRef();
  let include;

  if (window.location.pathname === "/") {
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
  useEffect(() => {
    if (search) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(async () => {
        const weatherData = await fetchWeatherData();
        setTodayData(weatherData);
        console.log(weatherData);
      }, 500);
    }
  }, [search]);

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
      <Routes>
      <Route exact path="/" element={<Today data={todayData} conditions={conditions} />}
          />

      <Route exact path="/Hourly" element={<Hourly data={todayData} conditions={conditions} />}/>
      <Route exact path="/Daily" element={<Daily data={todayData} conditions={conditions} />}/>
      </Routes>
    </>
    </Router>
  );
}

export default App;
