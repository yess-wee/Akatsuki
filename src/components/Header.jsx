
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";

import {Box} from '@mui/system'

const useStyles = makeStyles({
    logo: {
        width: 100,
        padding: 5
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    }
})

const Header = () => {
    const classes = useStyles();
    
    const logo = 'https://www.pngall.com/wp-content/uploads/13/Anime-Logo-Transparent.png';

    return (
        <div>


            <nav style={{backgroundColor:"black", height:80}}>

            <img src={logo} alt="logo" className={classes.logo} />    
            </nav>
        </div>
    )
}

export default Header;



 