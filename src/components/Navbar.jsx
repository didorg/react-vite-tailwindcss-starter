import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

function Navbar() {
  return (
    <header className=' padding-x px-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container pt-8'>
        <Link to='/' className='flex items-center'>
          <img src={headerLogo} alt='Logo' width={129} height={29} />
        </Link>

        <ul className='md:flex flex space-x-4 lg:gap-20 gap-6'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className='text-lg'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/'>
            <span>Sign in</span>
          </Link>
          <span>/</span>
          <Link to='/'>
            <span>Explore now</span>
          </Link>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
