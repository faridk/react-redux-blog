const FETCH_COMMENTS_ACTION = 'FETCH_COMMENTS_ACTION';
const FETCH_POSTS_ACTION = 'FETCH_POSTS_ACTION';
const ADD_COMMENT_ACTION = 'ADD_COMMENT_ACTION';

export const postReducer = (state, action) => {
  if (!state) {
    return {
      posts: []
    }
  }

  switch (action.type) {
    case FETCH_POSTS_ACTION:
      return {
        posts: action.posts
      };
    default:
      return state;
  }
}

export const commentReducer = (state, action) => {
  if (!state) {
    return {
      comments: []
    }
  }

  switch (action.type) {
    case FETCH_COMMENTS_ACTION:
      return {
        comments: action.comments
      };
    case ADD_COMMENT_ACTION:
      return {
        comments: [
          ...state.comments,
          action.comment
        ]
      };
    default:
      return state;
  }
}

export const fetchPostsAction = (posts) => {
  return {
    type: FETCH_POSTS_ACTION,
    posts
  };
}

export const fetchCommentsAction = (comments) => {
  return {
    type: FETCH_COMMENTS_ACTION,
    comments
  };
}

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT_ACTION,
    comment
  };
}

