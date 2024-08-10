//info button submenu
import Dropdown from './Dropdown';
import React, {useState} from "react";    

const Menu = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default action
    setDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <li style={{ position: 'relative' }}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={handleButtonClick}
            style ={{textDecoration: 'none'}}
          >
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;


// export default Menu;
// {/* <a href="/#class-schedule" onClick={() => handleClick('class-schedule-section')} onMouseOver = {() => handleMouseOver('class-info')} 
//                   onMouseOut = {handleMouseOut} style = {{color: hoveredLink === 'class-info'? "#0D3759": "#fff", textDecoration: "none"}}>Class Schedule</a> */}
// {/* <a href="/#demos" onClick={() => handleClick('demos-section')}onMouseOver = {() => handleMouseOver('demo')} 
//                   onMouseOut = {handleMouseOut} style = {{color: hoveredLink === 'demo'? "#0D3759": "#fff", textDecoration: "none"}}>Demonstrations</a>
//               <a href="/#follow-along" onClick={() => handleClick('follow-along-section')}onMouseOver = {() => handleMouseOver('follow-along')} 
//                   onMouseOut = {handleMouseOut} style = {{color: hoveredLink === 'follow-along'? "#0D3759": "#fff", textDecoration: "none"}}>Follow Along</a> */}
             
