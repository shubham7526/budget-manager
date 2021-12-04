import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header=()=>{


    return (
      <div className="d-flex">
         <div className="logo"><img src="./logoo.jpg"/></div>
         <div className="header-heading text-center fw-bolder fs-1 accordion-body">Budget Manager</div>
      </div>
    );
}
  
  export default Header;