import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import {NavLink} from 'react-router-dom'

const useStyles =makeStyles({
    header:{
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: "none",
        marginRight:20,
        fontSize:20
    }
})

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            {/* <h1>Hi I am NavBar component</h1> */}
            <AppBar className={classes.header}>
                <Toolbar>
                    
                    <NavLink className={classes.tabs}to="/" >Shashank Saini</NavLink>
                    <NavLink className={classes.tabs}to="/all">All Users</NavLink>
                    <NavLink className={classes.tabs}to="/add">Add User</NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
