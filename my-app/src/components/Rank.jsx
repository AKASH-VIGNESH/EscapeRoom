import { useNavigate } from 'react-router-dom';
import './rank.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Rank() {
    const navigate = useNavigate();
    const [items, setitems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/ranks`)
            .then((response) => {
                const data = response.data;
                console.log("percent:", data);
                setitems((data));
            })
            .catch((err) => {
                console.log('error:', err);
            })
    }, [])
    return (
        <div className='rank-wrapper'>
            <nav>
                <div className='little-nav-outer'>
                    <ul className='little-nav'>
                        <li className='nav-li' onClick={() => { navigate('/about') }} >about</li>
                        <li className='nav-li' onClick={() => { navigate('/profile') }} >Departments</li>
                    </ul>
                </div>
                <div>
                    <h2 className='title' onClick={() => { navigate('/home') }}>ESCAPE ROOM</h2>
                </div>
                <button className='nav-btn' onClick={() => { navigate('/') }} >
                    Logout
                </button>
            </nav>
            <div>
                <h1 className='stats-heading'>Rankings<span className='statsdept'>Department</span></h1>
            </div>
            <div className='rank-outer'>
                {items.map((item, index) => (
                    <div className="rank-div" key={index}>
                        <h1 className='deptTitle'>{item.user}</h1> {/* Displaying the user */}
                        <p className='deptmarks'>Marks: {item.sum}</p> {/* Displaying the sum */}
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Rank;