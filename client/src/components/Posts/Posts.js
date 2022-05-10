import React from 'react'
import Post from './post/post.js'
import useStyles from './styles'

function Posts() {
    const classes = useStyles();
  return (
      <>
          <h1>POSTs</h1>
          <Post/>
          <Post/>
      </>

  )
}

export default Posts