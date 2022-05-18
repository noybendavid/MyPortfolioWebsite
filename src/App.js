import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import NavBar from './components/layout/NavbBar'
import About from './components/pages/About'
import GitHub from './components/pages/GitHub'


function App() {


    return (
        <Router>
        <div className="App">
            <NavBar />
            <main className='verticalCenter'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/github' element={<GitHub />}/>
            </Routes>
            </main>
        </div>
        </Router>
    );
}

export default App;
