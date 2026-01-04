import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {

  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=870&auto=format&fit=crop";

  const HOT_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=870&auto=format&fit=crop";   

  const COLD_URL =
    "https://images.unsplash.com/photo-1608889174673-1f5a4b3b8e2d?q=80&w=870&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=870&auto=format&fit=crop";
  
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
            Temperature: {info.temp} <br />
            Min: {info.temp_min} | Max: {info.temp_max} <br />
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
