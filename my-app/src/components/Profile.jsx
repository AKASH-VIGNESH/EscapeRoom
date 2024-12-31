import { useNavigate } from "react-router-dom";
import './profile.css';
import { useEffect } from "react";
import logo from './IMAGES/LOGO.png';
import navimg from './IMAGES/navbar.png';

function Profile() {
    const navigate = useNavigate();
    const validCredentials = ['AIML', 'CSDA', 'CT', 'CSCG', 'CY', 'IT', 'CS', 'BCA', 'COMIT', 'CSCA', 'TESTER'];
    useEffect(() => {
        if (localStorage.getItem('want')) {
            localStorage.removeItem('want');
        }
    }, [])
    function handlestats(identity) {
        localStorage.setItem('want', identity);
        navigate('/stats');
    }
    return (
        <div>
            <div className="profile-wrapper">
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
                    <h1 className="profile-heading">Admin,</h1>
                </div>
                <div className="profile-main">
                    <div className="profile-gate-outer">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                            <div className="profilegate" onClick={() => { handlestats(validCredentials[e]) }} >
                                <h1 className="gate-name">{validCredentials[e]}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;