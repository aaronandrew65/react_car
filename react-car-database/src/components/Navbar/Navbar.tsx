import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Digits from '../../assets/images/image_processing20200520-13900-letxa.png';


const useStyles = makeStyles({
    logo: {
        content: `url(${Digits})`,
        maxWidth: '100%',
        height: '10vh',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: 'black',
        zIndex: 1,
        borderBottom: '3px solid grey',
        position: 'fixed'
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '6px'
    },
    spaceBetween: {
        justifyContent: 'flex-end',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '90%',
    },
    width100: {
        width: '100%'
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})


export const Navbar = () => {


    const classes = useStyles();

    return (
    <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} `}>
        <div className={`${classes.navlogo}`}>
            <Link to ='/' className={`${classes.logo} ${classes.p5}`}/>
        </div>
        <div className={`${classes.width60} ${classes.alignCenter}`}>
            <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.p5}`}>
                <li>
                    <Button>
                        <Link to='/car' className={`${classes.navbarItem} ${classes.psides}`}>Car Collection</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                    </Button>
                </li>
                
            </ul>
        </div>
        
    </div>
    )
}