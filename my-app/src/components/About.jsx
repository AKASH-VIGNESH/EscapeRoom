import './about.css';
import { useNavigate } from 'react-router-dom';
import designer from './designer.jpeg';
import developer from './developer.jpg';
import logo from './IMAGES/LOGO.png';
import navimg from './IMAGES/navbar.png';

function About() {
    const navigate = useNavigate();
    return (
        <>
            <div className='aboutWrapper'>
                <nav className='nav'>
                                <div className='little-nav-outer'>
                                    <ul className='little-nav'>
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
                                        <li className='nav-li' onClick={() => { navigate('/') }}>Logout</li>
                                    </div>
                                </div>
                            </nav>
                <div className='AboutmainContainer'>
                    <div className='headingOuter'>
                        <h1 className='about'>About</h1>
                    </div>
                    <div className='aboutScroll'>
                    <div className='aboutMainContaniner'>
                            <div className='photoContainer'>
                                <img src={developer} alt='' className='photo'></img>
                            </div>
                            <div className='aboutTheDesigner'>
                                <h1 className='designerName'>Akash Vignesh</h1>
                                <h1 className='designerDept'>2<sup>nd</sup> B.SC COMPUTER SCIENCE WITH DATA ANALYTICS</h1>
                                <p className='aboutDesigner'>As an undergraduate in data analytics, building this project has been a valuable learning experience. It has helped me apply both web development and data analysis skills to create a functional website.</p>
                                <h2 className='designerIdentity'>Web Developer</h2>
                            </div>
                        </div>
                        <div className='aboutMainContaniner'>
                            <div className='photoContainer'>
                                <img src={designer} alt='' className='photo'></img>
                            </div>
                            <div className='aboutTheDesigner'>
                                <h1 className='designerName'>Sharathi Anumanthan</h1>
                                <h1 className='designerDept'>2<sup>nd</sup> B.SC COMPUTER SCIENCE WITH DATA ANALYTICS</h1>
                                <p className='aboutDesigner'>Pursuing my under graduate in data analytics field. The process of buliding this project is contains a great amount of Knowledge</p>
                                <h2 className='designerIdentity'>Graphic Designer</h2>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
export default About;