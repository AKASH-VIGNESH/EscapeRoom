import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Solve from './components/Solver';
import About from './components/About';
import Question from './components/Question';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Profile from './components/Profile';
import Stats from './components/Stats';
import Rank from './components/Rank';
function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/solve' element={<Solve/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/question/1' element={<Question/>}></Route>
          <Route path='/question/2' element={<Question2/>}></Route>
          <Route path='/question/3' element={<Question3/>}></Route>
          <Route path='/question/4' element={<Question4/>}></Route>
          <Route path='/question/5' element={<Question5/>}></Route>
          <Route path='/question/6' element={<Question6/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/stats' element={<Stats/>}></Route>
          <Route path='/rank' element={<Rank/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
