import React from 'react';
import axios from 'axios';

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate('/')
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.status === 'Success'){
                navigate('/')
            }else{
                alert(res.data.Message)
            }
        })
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-50'>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' autoComplete='off' onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="paswword"  placeholder='Enter Password' name='password' onChange={e => setValues({...values, password: e.target.value})} className="form-control rounded-0"/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-o'>Login</button>
                    <button className='btn btn-default'>Create Account</button>
                </form>
            </div>
        </div>
    )
}
