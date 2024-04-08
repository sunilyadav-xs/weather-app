const Daily = ({ data, conditions }) => {
  const days = data?.days;
  return (
    <div className="containers">
      {days?.map((day, index) => {
        let src, phrase;

        if (day.snow > 0) {
          src = conditions[0].src;
          phrase = conditions[0].phrase;
        } else if (day.cloudcover < 20) {
          src = conditions[1].src;
          phrase = conditions[1].phrase;
        } else if (day.cloudcover >= 20 && day.cloudcover < 80) {
          src = conditions[3].src;
          phrase = conditions[3].phrase;
        } else if (day.cloudcover >= 80) {
          src = conditions[2].src;
          phrase = conditions[2].phrase;
        }
        return (
          <div key={index} className="weatherDataContainer">
            <div className="top">
              <div className="date">
                <span>{day.datetime}</span>
              </div>
              <div className="temp">
                <img src={src} alt="conditions" />
                <span>{day.temp}℃</span>
              </div>
              <div className="dew">
                <img src="" alt="" />
                <span>{day.dew}%</span>
              </div>
            </div>
            <div className="phrase">
              <span>{phrase}</span>
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
