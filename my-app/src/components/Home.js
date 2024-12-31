import { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import logo from './IMAGES/LOGO.png';
import navimg from './IMAGES/navbar.png';

function Home() {
    const navigate = useNavigate();
    const ruler = () => {
        const a = document.getElementById('changecolor');
        if (a) {
            // Change the color
            a.style.color = '#4B3BCF';

            // Revert back after 5 seconds
            setTimeout(() => {
                a.style.color = 'black'; // Reset to default
            }, 1000);
        }
    };
    const [user, setuser] = useState();
    useEffect(() => {
        let a = localStorage.getItem("username");
        setuser(a);

    }, [])
    function solvenext() {
        if (user == 'Admin') {
            navigate('/profile');
        }
        else {
            navigate('/solve');
        }
    }
    return (
        <div className='homeMainPage'>
            <div className='home-wrapper'>
                <nav className='nav'>
                    <div className='little-nav-outer'>
                        <ul className='little-nav'>
                            <li className='nav-li' onClick={() => { navigate('/about') }} >about</li>
                            <li className='nav-li' onClick={() => ruler()} >rules</li>
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
                            <li className='nav-li' onClick={()=>{navigate('/about')}}>about</li>
                            <li className='nav-li' onClick={() => ruler()}>rules</li>
                            <li className='nav-li' onClick={() => { navigate('/') }}>Logout</li>
                        </div>
                    </div>
                </nav>
                <div className='home-main'>
                    <div className='main-content-left'>
                        <h1 className='home-main-content'>
                            Unlock the gates<br /> to unleash your <br />knowledge
                        </h1>
                        <button className='solve-btn' onClick={() => { solvenext() }}>
                            {(user == 'Admin') ? 'View stats' : 'solve'}
                        </button>
                    </div>
                    <div className='main-content-rigth'>
                        <div className='home-terms'>
                            <p className='home-goal-game'>
                                The goal of the escape rooms<br /> game is to motivate the young minds<br /> get engaged to tech
                            </p>
                        </div>
                        <div className='rules-outer' id='changecolor'>
                            <h5 className='home-rules-heading' id='glower'>RULES:</h5>
                            <p id='glower'>
                                By default you have one keys to get<br /> access to the first page
                            </p>
                            <p id='glower'>
                                Unlock the gates using the keys that<br /> you can get by unlocking the previous<br /> gates
                            </p>
                            <p id='glower'>
                                Emphasis to learning in new ways
                            </p>
                        </div>
                    </div>
                </div>
                <div className='animation'>
                    <div className='step-1'></div>
                    <div className='step-2'></div>
                    <div className='step-3'></div>
                </div>
            </div>
        </div>

    );
}
export default Home;
