import { Table, TableBody, TableHead, TableRow,TableCell, makeStyles, Button} from '@material-ui/core';
import {React,useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getusers, deleteuser } from '../service/api'

const useStyle = makeStyles({
    table: {
        width: "50",
        margin: "50 0 0 50"
    },
    thead: {
        '& > *':{
            background: '#000000',
            color: '#FFFFFF',
            fontsize:20
        }
    },
    row: {
        '& > *':{
            fontsize:20
        }
    }

})

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();
    useEffect(() =>{
        getAllUsers();
    },[])
    const getAllUsers = async() =>{
        const response = await getusers();
        console.log(response.data);
        setUsers(response.data);
    } 
    const deleteUserData = async(id) => {
        await deleteuser(id);
        getAllUsers();
    }
    return (
       <Table className={classes.table}>
          <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
          </TableHead>
          <TableBody>
              {/* <TableRow></TableRow> */}
              {
                  users.map(users =>(
                      <TableRow>
                          <TableCell>{users.id}</TableCell>
                          <TableCell>{users.name}</TableCell>
                          <TableCell>{users.username}</TableCell>
                          <TableCell>{users.email}</TableCell>
                          <TableCell>{users.phone}</TableCell>
                          <TableCell>
                              <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${users.id}`}>Edit</Button>
                              <Button variant="contained" color="secondary" onClick={() =>deleteUserData(users.id)}>Delete</Button>
                          </TableCell>
                      </TableRow>
                  ))
              }
          </TableBody>  
       </Table>
    )
}

export default AllUsers
