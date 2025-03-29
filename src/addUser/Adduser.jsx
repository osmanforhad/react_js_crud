import React, { useState } from 'react';
import './Adduser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Adduser = () => {
    //define variable for user input
    const users = {
        name:"",
        email:"",
        address:"",
    };
    //set state for user input and navigation
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    //function for handle user input
    const inputHandler = (e) => {
        const{name, value} = e.target;
        console.log(name, value);
        setUser({...user, [name]:value})
    }
    //function for send user input into db
    const submitData = async(e) => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:8000/api/user", user)
            .then((response) => {
                toast.success(response.data.message,{position:"top-right"});
                navigate("/");
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
  <div className='addUser'>
    <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
        </Link>
    <h3>Add New User</h3>
    <form className='addUserForm' onSubmit={submitData}>
        <div className='inputGroup'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' onChange={inputHandler} autoComplete='off' placeholder='Enter name here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' onChange={inputHandler} autoComplete='off' placeholder='Enter email here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="address">Address:</label>
            <input type="text" id='address' name='address' onChange={inputHandler} autoComplete='off' placeholder='Enter address here' />
        </div>
        <div className='inputGroup'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
  )
}

export default Adduser;