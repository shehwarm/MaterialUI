import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    let response = await fetch(
      `${API_URL}&q=${city}&appid=${API_KEY}`
    );
    let data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return null;
    }

    let result = {
      city: data.name,
      temp: `${data.main.temp}°C`,
      temp_min: `${data.main.temp_min}°C`,
      temp_max: `${data.main.temp_max}°C`,
      humidity: `${data.main.humidity}%`,
      pressure: `${data.main.pressure} hPa`,
      weather: data.weather[0].description,
    };

    return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newInfo = await getWeather();
    if (newInfo) {
      updateInfo(newInfo);
    }
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          size="small"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
