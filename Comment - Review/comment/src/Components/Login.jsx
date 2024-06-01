import React from 'react'
import { useState } from 'react';
const Login = () => {
    // State object to manage form inputs
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: 'Male'
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form values as an object
        console.log(formData);
    };

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{backgroundColor:"lightsalmon",width:"400px",height:"300px",padding:"60px",border:"2px solid black",borderRadius:"10px"}}>
            {/* Text Input */}
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
            />
            <br />

            {/* Email Input */}
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
            />
            <br />

            {/* Password Input */}
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <br />


            {/* Radio Buttons */}
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                /> Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                /> Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                /> Other
            </label>
            <br /><br /><br /><br />

            {/* Submit Button */}
            <div className='buts'>
            <button type="submit" style={{color:"green"}}>Submit</button>
            </div>
        </form>
      </>
  );
};

export default Login