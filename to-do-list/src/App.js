import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (<div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/SignIn' element={<SignIn/>} />
        </Routes>
      </Router>
    </div>);
}

export default App;
