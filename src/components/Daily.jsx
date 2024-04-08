const Daily = ({ data, conditions,getWeatherCondition }) => {
  const days = data?.days;
  return (
    <div className="containers">
      {days?.map((day, index) => {
       const weatherCondition = getWeatherCondition(day, conditions);
        return (
          <div key={index} className="weatherDataContainer">
            <div className="top">
              <div className="date">
                <span>{day.datetime}</span>
              </div>
              <div className="temp">
                <img src={weatherCondition.src} alt="conditions" />
                <span>{day.temp}℃</span>
              </div>
              <div className="dew">
                <img src="./images/dew.png" alt="" />
                <span>{day.dew}%</span>
              </div>
            </div>
            <div className="phrase">
              <span>{weatherCondition.phrase}</span>
            </div>
            <div className="border"></div>
            <div className="weatherContents">
              <div className="weatherContent">
                <span>Feels Like</span>
                <span>{day.feelslike}℃</span>
              </div>
              <div className="weatherContent">
                <span>UV Index</span>
                <span>{day.uvindex}</span>
              </div>
            </div>
            <div className="border"></div>
            <div className="weatherContents">
              <div className="weatherContent">
                <span>Visibility</span>
                <span>{day.visibility}km</span>
              </div>
              <div className="weatherContent">
                <span>Wind Speed</span>
                <span>{day.windspeed}km/h</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Daily;
