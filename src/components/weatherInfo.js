import React from 'react';
import {CardContent, Typography, Box} from "@material-ui/core";


function WeatherInfo({weatherJson}) {
    const weatherdiscription = weatherJson.weather[0].description;
    const icon = weatherJson.weather[0].icon;
    const pressure = weatherJson.main.pressure;
    const humidity = weatherJson.main.humidity;
    const wind = weatherJson.wind.speed;
    const country = weatherJson.sys.country;
    const city = weatherJson.name;

    return (<CardContent>
        <Typography variant="h6" component="h2">{city}, {country}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {weatherdiscription}
        </Typography>
        <Box display = "flex" flexDirection = "row" justifyContent="space-between">
            <Typography variant="h2" component="h1">23 C</Typography>
            <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
        </Box>
        <Box display = "flex" flexDirection = 'row'>
            <Box p={1}>
                <Typography variant = 'h6' color = 'textPrimary'>
                    Humidity: {humidity} %
                </Typography>
            </Box>
            <Box p={1}>
                <Typography variant = 'h6' color = 'textPrimary'>
                    pressure: {pressure} pa
                </Typography>
            </Box>
            <Box p={1}>
                <Typography variant = 'h6' color = 'textPrimary'>
                    wind: {wind} km/h
                </Typography>
            </Box>
        </Box>
    </CardContent>)
}

export default WeatherInfo;