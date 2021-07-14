// import React from 'react'
// import axios from 'axios';

// const api = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default api

import axios from 'axios';

const url = 'http://localhost:3003/users';

export const getusers = async (id) => {
    id = id || ''; 
    return await axios.get(`${url}/${id}`);
}

export const adduser = async(user)=>{
    return await axios.post(url,user);
} 

export const edituser = async(id)=>{
    return await axios.put(`${url}/${id}`);
}

export const deleteuser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}