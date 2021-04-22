import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 2,
    textAlign: 'center',
  },
  comments: {
    flexGrow: 1,
  }
});


export default function Post (props) {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography color="textPrimary" variant="h5" component="h1" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body1" component="p">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{setShowComments(!showComments)}}>{showComments ? "Hide" : "Show"} Comments</Button>
          <Button size="small" onClick={()=>{setShowNewCommentForm(!showNewCommentForm)}}>{showNewCommentForm ? "Cancel" : "New Comment"}</Button>
        </CardActions>
        {showNewCommentForm ? <NewCommentForm postId={props.id} /> : null}
      </Card>
      {showComments ?
        <div className={classes.comments}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              {props.comments.map(comment => (
                <Comment name={comment.name} email={comment.email} body={comment.body}/>
              ))}
            </Grid>
          </Grid>
        </div>
       : null}
    </div>
  );
}