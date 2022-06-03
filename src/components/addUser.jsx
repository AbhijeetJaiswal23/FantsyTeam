import React from "react"

import {Button, FormControl, FormGroup, Input, InputLabel,styled, Typography} from '@mui/material'

// creating form for coolecting the user DATA

const Container=styled(FormGroup)`

    width:50%;
    margin:5% auto 0 auto;
    & > div{

        margin-top:20px
    }

`

const AddUser=()=>{

    return(

        <Container>
            <Typography variant="h4"> Add User</Typography>
            <FormControl>
                <InputLabel>
                        Name
                </InputLabel>

                <Input/>
            </FormControl>

            <FormControl>
                <InputLabel>
                        Email
                </InputLabel>

                <Input/>
            </FormControl>

            <FormControl>
                <InputLabel>
                        Phone Numeber
                </InputLabel>

                <Input/>
            </FormControl>

            <FormControl>
                <InputLabel>
                        username
                </InputLabel>

                <Input/>
            </FormControl>

            <FormControl>
                <Button variant="contained"> Add User</Button>
            </FormControl>

        </Container>

    )
}

export default AddUser;  