import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Navbar } from '../Navbar'



interface Props{
  title: string;
}

// background-color: #FFFFFF;
// background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%);


const useStyles = makeStyles({
  background: {
      // backgroundColor: '#002244',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'fixed',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'Black',
  },
  sub_text1: {
    textAlign: 'center',
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: 'black',
  },
  sub_text2: {
    textAlign: 'center',
    position: 'fixed',
    top: '35%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: 'black'
  },
  sub_text3: {
    textAlign: 'center',
    position: 'fixed',
    top: '35%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: 'black'
  }
});

export const Contact = (props:Props) => {
    const classes = useStyles();
  return (
    <>
    <Navbar />
    <div className={`${classes.background}`}>
      <div className={classes.main_text}>
        <h1>Contact Us!</h1>
      </div>
     <div className={classes.sub_text1}>
      <h2>Aaron Montoya</h2>
      <h4>(303)-555-5555</h4>
      <h4>a@gmail.com</h4>
     </div>
     <div className={classes.sub_text2}>
      <h2>Tony Stark</h2>
      <h4>(555)-123-5555</h4>
      <h4>tstark@stark.com</h4>
     </div>
     <div className={`${classes.sub_text3}`}>
     <h2>Help Desk Guy</h2>
      <h4>(544)-555-5555</h4>
      <h4>helpdesk@helpdesk.com</h4>
     </div>
    </div>
    </>

  )
}
