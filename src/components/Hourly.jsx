const Hourly = ({data, conditions}) => {
  const hours = data.days?.[0]?.hours;

  return (
    <div className="containers">
      {hours?.map((hour, index) => {
       let src, phrase;
  
       if (hour.snow > 0) {
         src = conditions[0].src;
         phrase = conditions[0].phrase;
       } else if (hour.cloudcover < 20) {
         src = conditions[1].src;
         phrase = conditions[1].phrase;
       } else if (hour.cloudcover >= 20 && hour.cloudcover < 80) {
         src = conditions[3].src;
         phrase = conditions[3].phrase;
       } else if (hour.cloudcover >= 80) {
         src = conditions[2].src;
         phrase = conditions[2].phrase;
       }
      
      return(
        
      <div key={index} className="weatherDataContainer">
        <div className="heading">
          <span>Hourly Weather</span>
          <span>{hour?.datetime}</span>
        </div>
        <div className="border"></div>
        <div className="temperature">
          <div className="temp">
            <img src={src} alt="conditions" />
            <span>{hour?.temp}℃</span>
          </div>
          <div className="feelsLike">
            <span>Feels Like</span>
            <span>{hour?.feelslike}℃</span>
          </div>
        </div>
        <div className="phrase">
          <p>{phrase}</p>
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
