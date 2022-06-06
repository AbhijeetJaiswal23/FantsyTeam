import React from "react"
import { useState } from "react"

import {Button, FormControl, FormGroup, Input, InputLabel,styled, Typography} from '@mui/material'

// importing add user API from service folder

import { addUser } from "../Service/api"

// creating form for coolecting the user DATA


const defaultobject={
    name:" ",
    emaill:" ",
    phone:" ",
    username:" "
}
const Container=styled(FormGroup)`

    
    width:50%;
    margin:5% auto 0 auto;
    & > div{

        margin-top:20px
    }

`

const AddUser=()=>{
    
    const [user,SetUser]=useState(defaultobject);
    const OnInputChange=(e)=>{

    console.log(e.target.value);
    SetUser({...user,[e.target.name]:e.target.value})

    console.log(user);
    }

    // sending DATA through API
    const addUserDetails= async()=>{
        await addUser(user);
    }
    return(

        <Container>
            <Typography variant="h4"> Add User</Typography>
            <FormControl>
                <InputLabel>
                        Name
                </InputLabel>

                <Input onChange={(e)=>OnInputChange(e)} name="name" />
            </FormControl>

            <FormControl> 
                <InputLabel>
                        Email
                </InputLabel>

                <Input onChange={(e)=>OnInputChange(e)} name ="email"/>
            </FormControl>

            <FormControl>
                <InputLabel>
                        Phone Numeber
                </InputLabel>

                <Input onChange={(e)=>OnInputChange(e)} name="phone"/>
            </FormControl>

            <FormControl>
                <InputLabel>
                        username
                </InputLabel>

                <Input onChange={(e)=>OnInputChange(e)} name="username" />
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={addUserDetails} > Add User</Button>
            </FormControl>

        </Container>

    )
}

export default AddUser;  