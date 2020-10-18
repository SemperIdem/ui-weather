import React from 'react';
import {AppBar, Typography, Toolbar, Card, TextField, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import WeatherAPI from "./weatherAPI";


const useStyles = makeStyles(theme => ({
    root : {
        marginTop: 50,
        display:'flex',
        width : 550,
        height: 250,
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    weatherInfo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
}));

function App() {
  const classes = useStyles();
  const [city,setCity] = React.useState(null);
  return (
      <>
      <AppBar p={2} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>UI WEATHER APP</Typography>
        </Toolbar>
      </AppBar>

          <Grid className={classes.root} alignItems="center" container>
        <Card className = {classes.weatherInfo}>
            <TextField autoFocus label="City" id="standard-size-normal"
                       onChange={(e)=> {setCity(e.target.value); }}/>
            <WeatherAPI city={city}/>;
        </Card>
      </Grid>
      </>
)
}

export default App;
