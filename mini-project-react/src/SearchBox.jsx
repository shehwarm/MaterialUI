import  { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

export default function SearchBox(){
    let [city, setCity] = useState("");

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = (event) =>{ 
        event.preventDefault();
        console.log(city);
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h1>Search for the weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" endIcon={<SendIcon />} size="small"> Send</Button>
            </form>
        </div>
    );
}

