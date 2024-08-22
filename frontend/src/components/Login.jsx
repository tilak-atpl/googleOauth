import React from 'react';

const Login = () => {
  const googleAuth = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={googleAuth}>Login with Google</button>
    </div>
  );
};

export default Login;
