import React from 'react'
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Navbar} from '../../components/Navbar';
import {Link} from 'react-router-dom';
import { url } from 'inspector';


interface Props{
    title: string;
}


const useStyles = makeStyles({
    background: {
        // backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
        // backgroundColor: '#002D62',
        // backgroundImage: url('./asses')
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
        color: 'black',
    },
    button_text: {
        color: 'black',
        textDecoration: 'none',
    },
});

export const Home = (props: Props) => {

    const classes = useStyles();

  return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/car' className={classes.button_text}>Register your vechicle!</Link>
                </Button>
            </div>
        </div>

    </>
  )
}
