import React from "react";
import {AppBar,Toolbar,styled} from '@mui/material';

import { NavLink } from "react-router-dom";

const Nav=styled(AppBar)`

        background:#111111;
`
const Tabs=styled(NavLink)`

        margin:20px;
        font-Size:20px;
        color:inherit;
        text-decoration:none;

`

const NavBar=()=>{

    return (
        <Nav position="static">
            <Toolbar>
                <Tabs to='/'>FantsyLeague</Tabs>  
                <Tabs to='/all'>AllUsers</Tabs>                 
                <Tabs to='/add'>AddUser</Tabs>                
                            

            </Toolbar>
        </Nav>
    )
}

export default NavBar;