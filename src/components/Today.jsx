const Today = ({ data, conditions}) => {

  // console.log(data)
  
  let src, phrase;

  if (data.currentConditions?.snow > 0) {
    src = conditions[0].src;
    phrase = conditions[0].phrase;
  } else if (data.currentConditions?.cloudcover < 20) {
    src = conditions[1].src;
    phrase = conditions[1].phrase;
  } else if (data.currentConditions?.cloudcover >= 20 && data.currentConditions?.cloudcover < 80) {
    src = conditions[3].src;
    phrase = conditions[3].phrase;
  } else if (data.currentConditions?.cloudcover >= 80) {
    src = conditions[2].src;
    phrase = conditions[2].phrase;
  }

  return (
    <div className="container">
      <div className="weatherDataContainer">
        <div className="heading">
          <span>Today's Weather</span>
          <span>{data.currentConditions?.datetime}</span>
        </div>
        <div className="border"></div>
        <div className="temperature">
        <div className="temp">
          <img src={src} alt="conditions" />
          <span>{data.currentConditions?.temp}℃</span>
        </div>
        <div className="feelsLike">
          <span>Feels Like</span>
          <span>{data.currentConditions?.feelslike}℃</span>
        </div>
        </div>
        <div className="phrase">
          <p>{phrase}</p>
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
