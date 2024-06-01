
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Nav.css';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons/faWheelchair';
import { faBars, faDownload, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';



function Nav() {

  const [menu,setMenu] = useState('none');
  const [logo,setLogo] = useState('block');
  const [width,setWidth] = useState('0');
  const [scroll , setScroll] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 0){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);
  
const menuTogle = () => {
  setMenu((p) => (p == 'block' ? 'none' : 'block'));
  setLogo((p) => (p == 'block' ? 'none' : 'block'));
  setWidth((p) => (p === '0' ? '1' : '0'))
}

  return (
    <div className='fixed'>
    <div className="nav" style={{
      backgroundColor:scroll ? 'blue' : 'transparent',
      transition:'background-color 0.3s ease-in-out'
    }}>
        <div className='left-nav'>
             <img style={{display:logo}} src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg'/>
        </div>
        <div className='midle-nav'>
            <li>Download</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
        </div>
        <div className='right-nav'>
            <button>Open Discord</button>
            <FontAwesomeIcon className='hamburger' icon={faBars} onClick={menuTogle} style={{height:'30px',cursor:'pointer'}}/>
        </div>

        {/* Absolute Nav */}
        <div className='ab-nav' style={{display:menu,opacity:width}}>
          <div className='nav-header'>
            <img src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg' />
            <FontAwesomeIcon className='into' icon={faX} onClick={menuTogle} />
          </div>
          <hr/>
          <div className='list' >
            <li>Download</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
          </div>
          <div className='download'>
            <FontAwesomeIcon icon={faDownload} />
            <b>Download</b>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Nav;
