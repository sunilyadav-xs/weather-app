import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({search, setSearch, darkMode, setDarkMode, styles}) => {

    const [dropShow, setDropShow] = useState(false);
    const onkeydown = (e)=>{
      if(e.code === 'Enter'){
        e.target.value = '';

      }
    };
    const handleClick = ()=>{
      setDropShow(false);
    }
    
  return (
    <div className="navbar" style={darkMode ? styles.darkNav : {}}>
      <div className="logo">
        <img src="./images/logo.svg" alt="logo-image" style={darkMode ? styles.lightLogo : {}} />
      </div>
      <div className="searchbar">
        <input
          type="search"
          name="search"
          className="search"
          placeholder="Search for city"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          onKeyDown={onkeydown}
        />
      </div>
      <div className="dropdown">
       <button onClick={()=>setDropShow(prev => !prev)}><img src="./images/drop.png" alt="dropdown" className={dropShow ? "dropup drop" :"drop"} style={darkMode ? styles.lightImg : {}}  /></button>
        <div className={dropShow ? "dropdown-content show" :"dropdown-content"} style={darkMode ? styles.darkcontent : {}}>
         <button onClick={handleClick}> <Link to="/">Today</Link></button>
         <button onClick={handleClick}><Link to="/Hourly">Hourly </Link></button>
         <button onClick={handleClick}><Link to="/Daily">Daily</Link></button>
        </div>
      <button className="darkMode" onClick={()=> setDarkMode(!darkMode)}><img src={darkMode ? './images/light-mode.png':'./images/dark-mode.png'} alt="light/dark mode" /></button>
      </div>
    </div>
  );
};

export default Nav;
