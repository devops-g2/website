import { useState } from 'react';
export default Register;



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    console.log(formData)

    const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (response.ok) {
        console.log("Registration successful");
      } else {
        const data = await response.json();
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

    return (
     <div>
        <h2>Customer Registration</h2>
        <form onSubmit={handleSubmit}>
      <div className='form-group'>
       <label htmlFor="name">First Name:</label>
            <input
            
                id="name"
                name="name"
                value={formData.name}
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
