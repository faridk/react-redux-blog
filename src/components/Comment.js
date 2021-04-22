import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    padding: 2,
    margin: '10px',
    textAlign: 'left',
  },
});


export default function Comment (props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h1">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.email}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          {props.body}
        </Typography>    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}