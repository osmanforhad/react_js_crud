import React from 'react';
import './Adduser.css';
import { Link } from 'react-router-dom';

const Adduser = () => {
  
  return (
  <div className='addUser'>
    <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
        </Link>
    <h3>Add New User</h3>
    <form className='addUserForm'>
        <div className='inputGroup'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' autoComplete='off' placeholder='Enter name here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' autoComplete='off' placeholder='Enter email here' />
        </div>
        <div className='inputGroup'>
            <label htmlFor="address">Address:</label>
            <input type="text" id='address' name='address' autoComplete='off' placeholder='Enter address here' />
        </div>
        <div className='inputGroup'>
        <button type="button" className="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
  )
}

export default Adduser;