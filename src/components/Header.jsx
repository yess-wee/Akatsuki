import React from 'react'

import { makeStyles } from "@mui/styles";
//import { AppBar, Toolbar, colors } from "@mui/material";

const useStyles = makeStyles({

    logo: {
        width: 90,
        padding: 3,
        mixBlendMode: 'multiply'
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    },
   
    
})

const Header = () => {

    const classes = useStyles();
    const logo = 'https://www.pngall.com/wp-content/uploads/13/Anime-Logo-Transparent.png';
 
 
    return (
    <div className={classes.headerContainer}>
       
        <img src={logo} alt={"LOGO"}  className={classes.logo}/>
       
       

    </div>
  )
}

export default Header
