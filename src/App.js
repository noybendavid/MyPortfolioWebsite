import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import GitHub from './components/pages/GitHub'

function App() {


    return (
        <Router>
        <div className="App">
            <Navbar />
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
