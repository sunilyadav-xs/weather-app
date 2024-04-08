import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {

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
    <div className="navbar">
      <div className="logo">
        <img src="./images/logo.svg" alt="logo-image" />
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
       <button onClick={()=>setDropShow(prev => !prev)}><img src="./images/drop.png" alt="dropdown" className={dropShow ? "dropup" :""} /></button>
        <div className={dropShow ? "dropdown-content show" :"dropdown-content"}>
         <button onClick={handleClick}> <Link to="/">Today</Link></button>
         <button onClick={handleClick}><Link to="/Hourly">Hourly </Link></button>
         <button onClick={handleClick}><Link to="/Daily">Daily</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
