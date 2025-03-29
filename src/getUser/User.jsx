import React, { useEffect, useState } from 'react';
import './user.css';
import axios from 'axios';

const User = () => {
    //script for fetch data from db
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async(req, res) => {
            try {
                //connect with server for getting data
                const response = await axios.get("http://localhost:8000/api/users");
                setUsers(response.data);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        //calling the method
        fetchData();
    },[]);
  return (
    <div className='userTable'>
        <button type="button" class="btn btn-primary">
            Add User <i class="fa-solid fa-user-plus"></i>
            </button>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.No</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Addess</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* itarate arry data*/}
             {users.map((user, index) => {
                return(<tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='actionButtons'>
                    <button type="button" class="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                         </td>
                </tr>);
             })}
                
            </tbody>
        </table>
    </div>
  )
}

export default User;