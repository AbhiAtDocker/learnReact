import React from 'react';
import '../App.css';

const Header02 =(props)=>{

return <div id={props.id}>
          <header className={props.headerclass}>

               <a
                className="App-link"
                href="/"
              >
              Home
              </a>


          </header>
      </div>



}

export default Header02;
