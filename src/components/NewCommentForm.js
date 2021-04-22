import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import { addCommentAction } from '../redux/reducers';

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 10,
    textAlign: "left"
  },
  button: {
    marginTop: "10px"
  }
});

function NewCommentForm (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    switch (event.target.id) {
      case ("name"): {
        setName(event.target.value);
        break;
      }
      case ("email"): {
        setEmail(event.target.value);
        break;
      }
      case ("body"): {
        setBody(event.target.value);
        break;
      }
      default:
        break;
    }
    console.log(event)
    
  };

  const saveComment = () => {
    props.addCommentAction({
      postId: props.postId,
      id: Math.max.apply(Math, props.comments.map(comment => comment.id)) + 1,
      name: name,
      email: email,
      body: body,
    });
    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <div>
      <form className={classes.root} noValidate>
        <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange} />
        <TextField
            id="email"
            label="E-Mail"
            value={email}
            onChange={handleChange} />
        <TextField
            id="body"
            label="Comment"
            multiline
            fullWidth
            rowsMax={4}
            value={body}
            onChange={handleChange}
          />
        <Button className={classes.button} color="primary" onClick={saveComment}>Save</Button>
      </form>
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
    addCommentAction: comment => {
      dispatch(addCommentAction(comment));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentForm);
