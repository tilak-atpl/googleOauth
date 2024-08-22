import React, { useEffect, useState } from 'react';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    fetch('http://localhost:5000/auth/user', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'Guest'}</h1>
    </div>
  );
};

export default Home;
