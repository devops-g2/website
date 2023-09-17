import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
export default EditProfile;

function EditProfile({ userId }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {

        const fetchUserData = async () => {

        try {
        const response = await fetch(`http://localhost:8000/users/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
    }, [userId]);
    
    
    return (
        <div>
            <h2>Edit Profile</h2>
            {user ? (
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Passwrod:</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            ) : (
                    
                <p>Loading user data...</p>
            )}
                </div>
    
    );

}

EditProfile.propTypes = {
  userId: PropTypes.string.isRequired, 
};
