const Today = ({ data, dayConditions, nightConditions, getWeatherCondition, styles, darkMode}) => {

  const currentTime= parseInt(data?.currentConditions?.datetime.slice(0,2),10);
  const sun = parseInt(data.days?.[0]?.sunrise.slice(0,2),10);
  const moon = parseInt(data.days?.[0]?.sunset.slice(0,2),10);
  let weatherCondition;
  currentTime > sun && currentTime < moon ? (weatherCondition = getWeatherCondition(data.currentConditions, dayConditions)):(weatherCondition = getWeatherCondition(data.currentConditions, nightConditions));
  

  return (
    <div className="container" >
      <div className="weatherDataContainer" style={darkMode ? styles.darkweather : {}}>
        <div className="heading">
          <span>Today's Weather</span>
          <span>{data.currentConditions?.datetime}</span>
        </div>
        <div className="border"></div>
        <div className="temperature">
        <div className="temp">
          <img src={weatherCondition.src} alt="conditions" />
          <span>{data.currentConditions?.temp}℃</span>
        </div>
        <div className="feelsLike">
          <span>Feels Like</span>
          <span>{data.currentConditions?.feelslike}℃</span>
        </div>
        </div>
        <div className="phrase">
          <p>{weatherCondition.phrase}</p>
          </div>
          <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>UV Index</span>
            <span>{data.currentConditions?.uvindex}</span>
          </div>
          <div className="weatherContent">
            <span>Dew Point</span>
            <span>{data.currentConditions?.dew}℃</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Wind</span>
            <span>{data.currentConditions?.windspeed}km/h</span>
          </div>
          <div className="weatherContent">
            <span>Pressure</span>
            <span>↑{data.currentConditions?.pressure}mb</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Wind Gusts</span>
            <span>{data.currentConditions?.windgust || "0"}km/h</span>
          </div>
          <div className="weatherContent">
            <span>Cloud Cover</span>
            <span>{data.currentConditions?.cloudcover}%</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Humidity</span>
            <span>{data.currentConditions?.humidity}%</span>
          </div>
          <div className="weatherContent">
            <span>Visibility</span>
            <span>{data.currentConditions?.visibility}km</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Percipitation</span>
            <span>{data.currentConditions?.precip || "0"}mm</span>
          </div>
          <div className="weatherContent">
            <span>Solar Radiation</span>
            <span>
              {data.currentConditions?.solarradiation}kWh/m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
