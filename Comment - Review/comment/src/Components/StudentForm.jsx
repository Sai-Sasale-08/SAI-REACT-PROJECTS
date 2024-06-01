import React, { useState } from 'react';


const StudentForm = () => {
    // State variables for form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [grade, setGrade] = useState('Select');
    const [gender, setGender] = useState('Male');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form values as an object
        console.log({
            fullName,
            email,
            password,
            grade,
            gender
        });
    };

    return (
    <>

    <h1>Sign-Up</h1>
   
        <form onSubmit={handleSubmit} style={{backgroundColor:"teal",width:"400px",height:"300px",padding:"60px",border:"2px solid black",borderRadius:"10px"}}>
            {/* Text Input */}
            <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <br />

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            {/* Password Input */}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            {/* Select Input */}
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option >Select Grade</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
            <br />
                 <div  className='choice'>

                   {/* Radio Buttons */}
            <label>Gender</label>
            <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
            /> Male
  
        <label>
            <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
            /> Female
        </label>
        <label>
            <input
                type="radio"
                value="Other"
                checked={gender === 'Other'}
                onChange={(e) => setGender(e.target.value)}
            /> Other
        </label>
        <br />
                 </div>
          

            {/* Submit Button */}
            <div className='buts'>
            <button type="submit" style={{color:"green"}}>Submit</button>
            </div>
        </form>
        </>
    );
};

export default StudentForm;