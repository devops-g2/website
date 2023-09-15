import { useState } from 'react';
export default Register;



function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
     <div>
        <h2>Customer Registration</h2>
        <form onSubmit={handleSubmit}>
      <div className='form-group'>
       <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
    </div> 
    <div className='form-group'>
        <label htmlFor="lastName">Last Name:</label>
            <input 
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastname}
                onChange={handleChange}    
                required    
            />
              </div>
    <div className='form-group'> 
        <label htmlFor="email">Email:</label>   
            <input
              type="text"  
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}  
              required
            />
            </div>
    <div className='form-group'>
        <label htmlFor="password">Password:</label>
        <input        
              type="text"  
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
 );
                
}
