import  { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

export default function SearchBox(){

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    let getWeather = async ({pdateInfo}) => {
        let response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);
        let data = await response.json();
        console.log(data);
        
        let result={
            city: data.name,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit =  async (event) =>{ 
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeather({updateInfo});
        updateInfo(newInfo);
        
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>

                <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                size="small"
                >
                Search
                </Button>

\            </form>
        </div>
    );
}

