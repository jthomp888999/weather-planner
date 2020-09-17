import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CurrentCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { feels_like, date, humidity, clouds, wind_speed } = props.data

  return (
    < Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} Current Temperature: {feels_like}॰
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Humidity: {humidity}%
        </Typography>
        <Typography variant="body2" component="p">
          Cloud cover: {clouds}%
          <br />
          Wind Speed: {wind_speed}
        </Typography>
      </CardContent>
    </Card >
  );
}

