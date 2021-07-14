import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import {React, useState,useEffect} from 'react'
import { edituser, getusers } from '../service/api'
import { useHistory, useParams } from 'react-router'

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

const EditUser = () => {
    const [ user, setUser] = useState(initialvalues);
    const { name,username,email,phone} = user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();
    
    useEffect(() => {
        loaduserdata();
    }, []);
    const loaduserdata = async () => {
        const response = await getusers(id);
        setUser(response.data);
    }

    const onvaluechange = (e) =>{
        //setUser
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }
    const edituserDetails = async() =>{
        await edituser(id, user);
        alert("user edited successfully");
        history.push('./all')
    }

    return (
       <FormGroup className={classes.container}>
        <Typography variant="h2">EDIT USER</Typography>
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
           <Button variant="contained" onClick={()=> edituserDetails()}color="secondary">AddUser</Button>
       </FormGroup>
    )
}

export default EditUser
