import React from 'react'
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';


interface Props{
  title: string
}


// #33006F
// linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)

const useStyles = makeStyles({
  background: {
      // backgroundImage: 'linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)',
      // backgroundColor: '#002D62',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'fixed',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      backgroundColor: 'black',
  },
  sub_text: {
    textAlign:'center',
    position: 'fixed',
    top:'30%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'white',
    backgroundColor: 'black'
  }
});


export const About = (props:Props) => {
    const classes = useStyles();
  return (
    <>
    <Navbar />
    <div className={`${classes.background}`}>
      <div className={classes.main_text}>
        <h1>Who We Are!</h1>
      </div>
      <div className={classes.sub_text}>
        <h2>We are a small car collection company that opperates out of Gotham City. Input your information so we can add to the collect and see what people are driving!  </h2>
      </div>
    </div>
    </>
  )
}
