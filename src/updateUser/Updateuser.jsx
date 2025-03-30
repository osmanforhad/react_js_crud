import React, { useEffect, useState } from 'react';
import './Updateuser.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Updateuser = () => {
    //define variable for user input
    const users = {
        name:"",
        email:"",
        address:"",
    };
    //set state for user input and navigation
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    //extract the user requested id from url param
    const {id} = useParams();

    //get user data from server based on specific id
    useEffect(() => {
        try {
            axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            setUser(response.data)
        })
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    //function for handle user input
    const inputHandler = (e) => {
        const{name, value} = e.target;
        console.log(name, value);
        setUser({...user, [name]:value})
    }
    
    //function for send user input into db and update the user data
    const submitData = async(e) => {
        try {
            e.preventDefault();
            await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
            .then((response) => {
                toast.success(response.data.message,{position:"top-right"});
                navigate("/");
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
  <div className='updateUser'>
    <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
        </Link>
    <h3>Update User</h3>
    <form className='updateUserForm' onSubmit={submitData}>
        <div className='inputGroup'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' onChange={inputHandler} value={user.name} autoComplete='off' placeholder='Enter name here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' onChange={inputHandler} value={user.email} autoComplete='off' placeholder='Enter email here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="address">Address:</label>
            <input type="text" id='address' name='address' onChange={inputHandler} value={user.address} autoComplete='off' placeholder='Enter address here' />
        </div>
        <div className='inputGroup'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
  )
}

export default Updateuser;