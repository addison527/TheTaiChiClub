import React, {useState, useEffect} from 'react' //tracks screen width
import { Link } from 'react-router-dom'
import logo from './images/CatLogoNoWords.png';
import { Button } from './Button';
import { Box, HStack } from "@chakra-ui/react";
import Menu from './Menu';
// import { menuData } from '../menuData';

const menuData = [
  {title: 'Information',
    url: '/information',
    submenu:[
      {
        title: 'Class Schedule',
        url: '/class-schedule',
      },
      {
        title: 'Follow Along Videos',
        url: '/follow-along',
      },
      {
        title: 'Resources & Demonstrations',
        url: '/demonstrations',
      },
    ]
  }

];
const Navbar = () => {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else {setButton(true)};
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect (() => {
    showButton();
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    updateScreenSize();
    window.addEventListener('resize',showButton);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);


  
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const handleMouseOver = (linkId) => {setHoveredLink(linkId); };
  const handleMouseOut = () => { setHoveredLink(null); };

  return (
    <Box flex = "1" zIndex={1000} position="fixed" top={0} left={0} right={0} translateY={0} transitionProperty="transform" transitionDuration=".3s" transitionTimingFunction="ease-in-out" backgroundColor="#CED5DF">
      <Box color = "#CED5DF" maxWidth = "1280px" height = "85px" margin = "0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing = {4}>
              <Link to="/"className='navbar-logo' onClick = {closeMobileMenu}>
                <img src={logo} alt="logo" style = {{width: '50px', height: 'auto'}}></img>
              </Link>
              <HStack spacing = {20}>
                <h1 style = {{color: "#fff", marginLeft: '0px'}}>The TaiChi Club</h1>
              </HStack>
            </HStack>
          </nav>
          <nav>
            <div>
              {isMobile ? ( <Button buttonStyle='btn--outline' style = {{padding: '10px', color: '#0D3759'}}>Services</Button>)
            :
            (<HStack spacing = {20}>
              <a href="/about" onClick={() => handleClick('About')} onMouseOver = {() => handleMouseOver('about')} 
                  onMouseOut = {handleMouseOut}  style = {{color: hoveredLink === 'about'? "#0D3759": "#fff", textDecoration: "none"}}>About</a>
              {/* <a href="/#Information" onClick={() => handleClick('information-section')} onMouseOver = {() => handleMouseOver('info')} 
                  onMouseOut = {handleMouseOut}  style = {{color: hoveredLink === 'info'? "#0D3759": "#fff", textDecoration: "none"}}>Information</a> */}
                  {menuData.map((menu, index) => (
                    menu.title === "Information" ? <Menu items = {menu} key={index}/> : null
                  ))}
              <a href="/contact" onClick={() => handleClick('Contact')} onMouseOver = {() => handleMouseOver('contact')} 
                  onMouseOut = {handleMouseOut} style = {{color: hoveredLink === 'contact'? "#0D3759": "#fff", textDecoration: "none"}}>Contact</a>
              </HStack>)}
            </div>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Navbar;

