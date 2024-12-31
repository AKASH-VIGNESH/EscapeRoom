import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './question.css'
import { useEffect, useState } from "react";
import logo from './IMAGES/LOGO.png';
import navimg from './IMAGES/navbar.png';

function Question3() {
    const items = ['q601', 'q602', 'q603', 'q604', 'q605', 'q606', 'q607', 'q608', 'q609', 'q610'];

    const getRandomElement = (array) => {
        if (array.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const [mark, setmark] = useState(100);
    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setanswer] = useState('');
    const [error, setError] = useState(null);
    const [user, setuser] = useState();
    const [score1, setscore1] = useState();
    const score = [];

    useEffect(() => {
        const randomItem = getRandomElement(items);
        axios.get(`http://localhost:3001/data6/${randomItem}`)
            .then((response) => {
                const data = response.data[0];
                setQuestion(data.question);
                setOption1(data.option1);
                setOption2(data.option2);
                setOption3(data.option3);
                setOption4(data.option4);
                setanswer(data.answer);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch the question.");
            });
        const localuser = localStorage.getItem('username');
        axios.get(`http://localhost:3001/login/${localuser}`)
            .then((response) => {
                const data = response.data[0];
                setuser(data.id);
                console.log("userid:", data.id);
            })
            .catch((err) => {
                console.error(err);
                setError("failed to score");
            });
    }, []);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:3001/scoreget6/${user}`)
                .then((res) => {
                    const data = res.data[0].gate6;
                    console.log("gate prevalue:", data);
                    setscore1(data);
                })
                .catch((err) => {
                    console.error(err);
                    setError("failed to score");
                });


        }

    }, [user])

    const checkanswer = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userAnswer = formData.get("option");

        if (!userAnswer) {
            alert("Please select an answer.");
            return;
        }
        if (userAnswer === answer) {
            alert("Correct! 🎉");
            localStorage.setItem('key', 7);
            let fscore = (score1 === null || score1 === 0) ? mark : (score1 + mark) / 2;
            console.log(fscore);
            axios.put(`http://localhost:3001/edit6/${user}`, { gate6: fscore })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log('unsuccesfull score');
                })
            navigate('/solve');
        }
        else {
            alert(`Wrong answer please try again`);
            setmark((pre) => pre - 25);
        }
    };

    return (
        <div className="questionWrapper">
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
            <form className="questionbox" onSubmit={checkanswer}>
                <div className="paddingfield">
                    <div>
                        <h2 className="question">{question}</h2>
                    </div>
                    <div className="answer">
                        <div className="option">
                            <label className="option-input" ><input type="radio" name="option" value={option1} className="option" ></input>{option1}</label>
                        </div>
                        <div className="option">
                            <label className="option-input" ><input type="radio" name="option" value={option2} className="option" ></input>{option2}</label>
                        </div>
                        <div className="option">
                            <label className="option-input" ><input type="radio" name="option" value={option3} className="option" ></input>{option3}</label>
                        </div>
                        <div className="option">
                            <label className="option-input" ><input type="radio" name="option" value={option4} className="option" ></input>{option4}</label>
                        </div>
                    </div>
                    <div className="btn-end">
                        <button className="next-btn" type="submit">Next</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Question3;