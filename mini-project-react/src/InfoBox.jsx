import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=870&auto=format&fit=crop";

    let info = {
        city: "Delhi",
        temp: "25°C",
        temp_min: "20°C",
        temp_max: "30°C",
        humidity: "78%",
        pressure: "1013 hPa",
    };

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Weather Image"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" component="span">
                        Temperature: {info.temp} (Min: {info.temp_min}, Max: {info.temp_max}) <br />
                        Humidity: {info.humidity} <br />
                        Pressure: {info.pressure}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
