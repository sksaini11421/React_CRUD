import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import {React, useState} from 'react'
import { adduser } from '../service/api'
import { useHistory } from 'react-router'
const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop:20
        }
    }
})

const initialvalues ={
    name: "",
    username: "",
    email: "",
    phone: ""

}

const AddUsers = () => {
    const [ user, setUser] = useState(initialvalues);
    const { name,username,email,phone} = user;
    const classes = useStyle();
    const history = useHistory();

    const onvaluechange = (e) =>{
        //setUser
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }
    const adduserDetails = async() =>{
        await adduser(user);
        alert("user added successfully");
        history.push('./all')
    }

    return (
       <FormGroup className={classes.container}>
        <Typography variant="h2">ADD USER</Typography>
           <FormControl>
               <InputLabel>Name</InputLabel>
                   <Input onChange={(e) => onvaluechange(e)} name="name" value={name}/>

                   
               
           </FormControl>
           <FormControl>
               <InputLabel>UserName</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name="username" value={username}/>

               
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name="email" value={email}/>

               
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name="phone" value={phone}/>

               
           </FormControl>
           <Button variant="contained" onClick={()=> adduserDetails()}color="secondary">AddUser</Button>
       </FormGroup>
    )
}

export default AddUsers
