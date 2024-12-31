import { useNavigate } from 'react-router-dom';
import './stats.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Stats() {
    const navigate = useNavigate();
    const [user, setuser] = useState();
    const [gate1, setgate1] = useState();
    const [gate2, setgate2] = useState();
    const [gate3, setgate3] = useState();
    const [gate4, setgate4] = useState();
    const [gate5, setgate5] = useState();
    const [gate6, setgate6] = useState();
    const [percent, setpercent] = useState(null);

    function resetValue() {
        let confirmation = window.confirm('All data will be deleted if you reset. Are you sure?');
        if (confirmation) {
            axios.put(`http://localhost:3001/reset/${user}`)
                .then((response) => {
                    console.log('response:', response);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log('error:', err);
                });
        }
    }
    

    useEffect(() => {
        const localuser = localStorage.getItem('want');
        axios.get(`http://localhost:3001/login/${localuser}`)
            .then((response) => {
                const data = response.data[0];
                setuser(data.id);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:3001/stats/${user}`)
            .then((response) => {
                const data = response.data[0];
                console.log(data);
                setgate1(data.gate1);
                setgate2(data.gate2);
                setgate3(data.gate3);
                setgate4(data.gate4);
                setgate5(data.gate5);
                setgate6(data.gate6);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [user])
    useEffect(() => {
        document.getElementById('bar1').style.height = `${gate1}%`;
        document.getElementById('bar2').style.height = `${gate2}%`;
        document.getElementById('bar3').style.height = `${gate3}%`;
        document.getElementById('bar4').style.height = `${gate4}%`;
        document.getElementById('bar5').style.height = `${gate5}%`;
        document.getElementById('bar6').style.height = `${gate6}%`;
    }, [gate1, gate2, gate3, gate4, gate5, gate6])

    if(user)
    {
        axios.get(`http://localhost:3001/percent/${user}`)
            .then((response) => {
                const data = response.data[0].average;
                console.log("percent:", data);
                setpercent(data);
            })
            .catch((err) => {
                console.log('error:', err);
            })
    }
    return (
        <div className="stats-wrapper">
            <nav>
                <div className='little-nav-outer'>
                    <ul className='little-nav'>
                        <li className='nav-li' onClick={() => { navigate('/about') }} >about</li>
                        <li className='nav-li' onClick={() => { navigate('/profile') }}>Departments</li>
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
                <h1 className='stats-heading'>{localStorage.getItem('want')}<span className='statsdept'>Department</span></h1>
            </div>
            <div className='stats-grid'>
                <div className='stats-chart'>
                    <span className='statsdept completion'>Completion status</span>
                    <div className='barchart'>
                        <div className="bars bar1" id='bar1'>
                            <h3 className='bar-content'>Gate1</h3>
                        </div>
                        <div className="bars bar2" id='bar2'>
                            <h3 className='bar-content'>Gate2</h3>
                        </div>
                        <div className="bars bar3" id='bar3'>
                            <h3 className='bar-content'>Gate3</h3>
                        </div>
                        <div className="bars bar4" id='bar4'>
                            <h3 className='bar-content'>Gate4</h3>
                        </div>
                        <div className="bars bar5" id='bar5'>
                            <h3 className='bar-content'>Gate5</h3>
                        </div>
                        <div className="bars bar6" id='bar6'>
                            <h3 className='bar-content'>Gate6</h3>
                        </div>
                    </div>
                </div>
                <div className='stats-overview'>
                    <div className='stats-overview-content'>
                        <h1 className='content-heading'>Overall Department <br />Score</h1>
                        <h1 className='content-percent'>{percent}%</h1>
                    </div>
                    <div className='stats-overview-btn'>
                        <button className='stats-btn' onClick={() => { resetValue(); }} >Reset</button>
                        <button className='stats-btn ranker' onClick={() => { navigate('/rank') }}>Check Rank</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stats;