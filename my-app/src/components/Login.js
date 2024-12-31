import { useNavigate } from 'react-router-dom';
import './login.css';
import { useEffect, useState } from 'react';
function Login() {

    useEffect(()=>{
        localStorage.clear();
    },[])

    const navigate = useNavigate();
    const validCredentials = ['AIML', 'CSDA','CT','CSCG','CY','IT','CS','BCA','COMIT','CSCA','Admin','TESTER'];
    const [user, setuser] = useState();
    const [pass, setpass] = useState();
    const [msg,setmsg]=useState();
    const handlenext = (e) => {
        e.preventDefault();
        if (validCredentials.includes(user) && validCredentials.includes(pass)&&user===pass) {
            localStorage.setItem('username',user);
            navigate('/home');
        }
        else if(user!==pass&&validCredentials.includes(user) && validCredentials.includes(pass))
        {
            setmsg('username and password are not equal');
        }
        else{
            setmsg('invalid credentials');
        }
    }
    return (
        <>
            <div className='loginContainer'>
                <form method='Post' className='loginForm' onSubmit={handlenext}>
                    <div className='loginHeaderDiv'>
                        <h1 className='loginHeading'>LOGIN</h1>
                    </div>
                    <div className='usernamediv'>
                        <label for='username' className='userlabel'>Username</label>
                        <input type='text' id='username' className='username' value={user} onChange={(e) => setuser(e.target.value)}></input>
                    </div>
                    <div className='passwordDiv'>
                        <label for='password' className='passlabel'>
                            Password
                        </label>
                        <input type='password' id='password' className='password' value={pass} onChange={(e) => setpass(e.target.value)}></input>
                    </div>
                    <div className='loginbtnDiv'>
                        <button type='submit' className='login-btn'>NEXT</button>
                    </div>
                    <div className='msg'>
                        <span className='spanner' id='spanner'>{msg}</span>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;