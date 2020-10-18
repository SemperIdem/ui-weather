import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import WeatherInfo from "./weatherInfo";


const API_KEY = 'd9137ea6873a51cee6a28debe252b755';
const UNITS = 'Metric'



class WeatherAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherJson : null,
            isLoading: true,
            error: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps && prevProps.city !== this.props.city) {
            const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.props.city + '&units=' + UNITS
                + '&appid=' + API_KEY;
            fetch(URL).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG')
                }
            })
                .then(data => this.setState(
                    {
                        weatherJson: data,
                        isLoading: false
                    }))
                .catch(error => this.setState({error, isLoading: true}));
        }
    }

    render() {
        if(this.state.isLoading) {
            if(this.props.city != null) {
                return (
                    <h1>
                        <LinearProgress />
                    </h1>
                )
            }
            else return null;
        }
        else {
            return(
                <WeatherInfo weatherJson= {this.state.weatherJson}/>
            )
        }
    }
}

export default WeatherAPI;