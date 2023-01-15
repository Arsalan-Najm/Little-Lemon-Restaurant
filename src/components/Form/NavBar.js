import logo from '../../images/1.png';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <nav className='form-nav'>
        <Link to='/'>
          <div className='img-box'>
            <img src={logo} alt='logo' />
          </div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
