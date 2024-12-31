import React, { useState, useEffect } from 'react';
import './solve.css';
import { useNavigate } from 'react-router-dom';
import logo from './IMAGES/LOGO.png';
import navimg from './IMAGES/navbar.png';

function Solve() {
    const navigate = useNavigate();
    const [keys, setkeys] = useState(0);
    useEffect(() => {
        if (localStorage.getItem('key')) {
            setkeys(localStorage.getItem("key"));
        }
        else {
            localStorage.setItem("key", 1);
        }

        if (localStorage.getItem('key') > 6) {
            alert('You have completed all gates successfully!');
            localStorage.clear();
            navigate('/home');
        }
    }, []);


    function handlegate(e) {
        if (keys == e) {
            navigate(`/question/${e}`)
        }
        else if (keys > e) {
            alert(`gate${e} is already solved can't access them again.`);
        }
        else {
            alert(`gate${e} is locked you can only access gate${keys} now.`);
        }
    }
    return (
        <div className='solve-wrapper'>
            <nav className='nav'>
                <div className='little-nav-outer'>
                    <ul className='little-nav'>
                        <li className='nav-li' onClick={() => { navigate('/about') }} >about</li>
                    </ul>
                </div>
                <div>
                    <h2 className='title' onClick={() => { navigate('/home') }}>ESCAPE ROOM</h2>
                </div>
                <button className='nav-btn' onClick={() => { navigate('/') }} >
                    Logout
                </button>
            </nav>
            <nav className='mobilelogo'>
                <div className='logo-div'>
                    <img src={logo} alt='' className='logo' onClick={() => { navigate('/home') }}></img>
                </div>
                <div class="dropdown">
                    <img class="dropdown-button" src={navimg}></img>
                    <div class="dropdown-content">
                        <li className='nav-li' onClick={() => { navigate('/about') }}>about</li>
                        <li className='nav-li' onClick={() => { navigate('/') }}>Logout</li>
                    </div>
                </div>
            </nav>
            <div>
                <h1 className='solve-heading'>Here are your gates,</h1>
            </div>
            <div className='solve-main'>
                <div className='gate-outer'>
                    {[1, 2, 3, 4, 5, 6].map((e) => (
                        <div className={`gate${e} gate ${keys >= e ? 'g-success' : ''}`} onClick={() => { handlegate(e) }}>
                            <h1 className='gate-num'>{e}</h1>
                            <h5 className='gate-msg'>{keys >= e ? (keys == e ? 'Unlocked' : 'Solved') : 'Locked'}</h5>
                        </div>
                    ))}
                </div>
                <div>
                    <button className='key-num-outer'>{keys} key{keys <= 1 ? ' ' : 's '}</button>
                    <br />
                    <p className='key-notice'>
                        you have {keys} key{keys <= 1 ? ' ' : 's '}to access the gates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Solve;
