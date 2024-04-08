const Hourly = ({data, conditions, getWeatherCondition}) => {
  const hours = data.days?.[0]?.hours;

  return (
    <div className="containers">
      {hours?.map((hour, index) => {
        
      const weatherCondition = getWeatherCondition(hour, conditions);
      
      return(
        
      <div key={index} className="weatherDataContainer">
        <div className="heading">
          <span>Hourly Weather</span>
          <span>{hour?.datetime}</span>
        </div>
        <div className="border"></div>
        <div className="temperature">
          <div className="temp">
            <img src={weatherCondition.src} alt="conditions" />
            <span>{hour?.temp}℃</span>
          </div>
          <div className="feelsLike">
            <span>Feels Like</span>
            <span>{hour?.feelslike}℃</span>
          </div>
        </div>
        <div className="phrase">
          <p>{weatherCondition.phrase}</p>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>UV Index</span>
            <span>{hour?.uvindex}</span>
          </div>
          <div className="weatherContent">
            <span>Dew Point</span>
            <span>{hour?.dew}℃</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Wind</span>
            <span>{hour?.windspeed}km/h</span>
          </div>
          <div className="weatherContent">
            <span>Pressure</span>
            <span>↑{hour?.pressure}mb</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Wind Gusts</span>
            <span>{hour?.windgust || "0"}km/h</span>
          </div>
          <div className="weatherContent">
            <span>Cloud Cover</span>
            <span>{hour?.cloudcover}%</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Humidity</span>
            <span>{hour?.humidity}%</span>
          </div>
          <div className="weatherContent">
            <span>Visibility</span>
            <span>{hour?.visibility}km</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="weatherContents">
          <div className="weatherContent">
            <span>Percipitation</span>
            <span>{hour?.precip || "0"}mm</span>
          </div>
          <div className="weatherContent">
            <span>Solar Radiation</span>
            <span>
              {hour?.solarradiation}kWh/m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>);
      })}
    </div>
  );
};

export default Hourly;
