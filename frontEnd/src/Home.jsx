import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [Message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5173')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                    setMessage(res.data.Message);
                }
            })
    }, []);


    const handleLogout = () => {
        axios.get('http://localhost:5173/logout')
            .then(res => {
                location.reload(true);
                if (res.data.Status === "Success") {
                    location.reload(true);
                } else {
                    alert(err);
                }
            }).catch(err => console.log(err))
    }

    return (
        <div className='container mt-4'>
            {
                auth ?
                    <div>
                        <h3>You are Authorized {name}</h3>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </div>
                    :
                    <div>
                        <h3>{Message}</h3>
                        <h3>Login Now</h3>
                        <Link to="/login" className='btn btn-primary'>Login</Link>
                    </div>
            }
        </div>
    )
}

export default Home;