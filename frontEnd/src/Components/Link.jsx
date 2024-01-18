import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ auth, name, handleLogout, Message }) => {
  return (
    <div className='container mt-4'>
      {auth ? (
        <div>
          <h3>You are Authorized {name}</h3>
          <button className='btn btn-danger' onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>{Message}</h3>
          <h3>Login Now</h3>
          <Link to="/login" className='btn btn-primary'>Login</Link>
        </div>
      )}
    </div>
  );
};

export default LinkComponent;