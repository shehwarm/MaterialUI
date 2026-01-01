import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function SearchBox(){
    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form>
                <TextField id="city" label="City Name" variant="outlined" required/>
                <br></br><br></br>
                <Button variant="contained" endIcon={<SendIcon />} size="small"> Send</Button>
            </form>
        </div>
    );
}

