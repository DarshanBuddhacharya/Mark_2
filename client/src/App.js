import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/img1.png'

import useStyles from './styles'
function App() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className= {classes.heading} variants='h2' align='center'>
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt='memories' height='400'/>
      </AppBar>
      <Grow in>
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs = {12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs = {12} sm={4}>
            <Form/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App