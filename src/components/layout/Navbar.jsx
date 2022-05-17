import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    
    //NavBar -> Container Wrapper -> Toggle Btn-> collapsible Wrapper
    <nav className="navbar navbar-expand-sm showNav m-2 mb-3">
    
      <div className="container-fluid">
       <div className='navbar-header'>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
         <FaBars style={{color: 'white'}}/>
        </button>
        <a className="navbar-brand myFont text-white" href="#">
          Noy Ben David</a>
        </div>

    
        <div className="collapse navbar-collapse" id='navbarNavAltMarkup'>
          <div className="navbar-nav text-start ms-auto">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn myFont'>
                Home
                </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn myFont'>
                About
               </Link>
               <Link to='/github' className='btn btn-ghost btn-sm rounded-btn myFont text-white'>
                GitHub
               </Link>
          </div>
        </div>
     </div>
   </nav>  
  )
}

export default Navbar
