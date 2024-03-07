import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="Logo"><img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg" height={'100px'} width={'100px'} alt="" /></div>
        <div className="Link"><Link className='link' to={'/'}>Home</Link>
        <input type="text" placeholder="Search Recipe Here"/>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navbar
