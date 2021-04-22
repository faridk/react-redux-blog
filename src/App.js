import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Post from './components/Post';
import { fetchPostsAction, fetchCommentsAction } from './redux/reducers';

const useStyles = makeStyles({ 
  root: {
    flexGrow: 1,
    width: '70%',
    margin: 'auto',
  }
});

function App(props) {
  const classes = useStyles();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => props.fetchPostsAction(posts))
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => props.fetchCommentsAction(comments))
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {
          props.posts.map((post) => (
            <div>
              <Post userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    comments={props.comments.filter(comment => comment.postId === post.id)}
                />
                <br/>
            </div>
          ))
          }
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    comments: state.comment.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsAction: posts => {
      dispatch(fetchPostsAction(posts));
    },
    fetchCommentsAction: comments => {
      dispatch(fetchCommentsAction(comments));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
