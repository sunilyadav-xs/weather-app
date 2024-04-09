const Hourly = ({
  data,
  dayConditions,
  nightConditions,
  getWeatherCondition,
  styles,
  darkMode
}) => {
  const hours = data.days?.[0]?.hours;
  const formatHour = (hour) => {
    const hourlyTime = parseInt(hour?.datetime?.slice(0, 2), 10);
    const isPM = hourlyTime >= 12;
    const formattedHour = hourlyTime % 12 === 0 ? 12 : hourlyTime % 12;
    const period = isPM ? "PM" : "AM";
    return {formattedHour, period, hourlyTime}
  };
  const sun = parseInt(data.days?.[0]?.sunrise.slice(0,2),10);
  const moon = parseInt(data.days?.[0]?.sunset.slice(0,2),10);
  return (
    <div className="containers" >
      {hours?.map((hour, index) => {

        const formattedTime = formatHour(hour);
        let weatherCondition;
        if (formattedTime.hourlyTime > sun && formattedTime.hourlyTime < moon) {
          weatherCondition = getWeatherCondition(hour, dayConditions);
        }
        else{
          weatherCondition = getWeatherCondition(hour, nightConditions);
        }
        return (
          <div key={index} className="weatherDataContainer" style={darkMode ? styles.darkweather : {}}>
            <div className="heading">
              <span>Hourly Weather</span>
              <span>{formattedTime.formattedHour} {formattedTime.period}</span>
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
          </div>
        );
      })}
    </div>
  );
};

export default Hourly;
