//import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {useState} from 'react'


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
    
<Navbar expand="lg" className='showNav myFont' expanded={expanded} variant="dark" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="fs-4">
        <Link to='/' onClick={() => setExpanded(false)} className='text-decoration-none m-2 w3-animate-left'>Home</Link>
        <Link to='/about' onClick={() => setExpanded(false)} className='text-decoration-none m-2 w3-animate-left'>About</Link>
        <Link to='/github'onClick={() => setExpanded(false)} className='text-decoration-none m-2 w3-animate-left'>GitHub</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
   </> 
  )
}


export default NavBar
