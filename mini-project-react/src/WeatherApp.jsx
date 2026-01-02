import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: "25°C",
        temp_min: "20°C",
        temp_max: "30°C",
        humidity: "78%",
        pressure: "1013 hPa"

});

  let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
  } ;

    return (
        <div style={{ textAlign: 'center', marginTop: '20px'    }}>
            <h1>Weather App</h1>
            <br></br>
            <SearchBox updateInfo={updateInfo} />
            <br></br>
            <InfoBox info={weatherInfo} />
        </div>
    );
}