import React from 'react';
import '../App.css';

const Header01 =(props)=>{

return <div id={props.id}>
          <header className={props.headerclass}>

               <a
                className="App-link"
                href="/achievements"
              >
                Achievements
              </a>
              <a
               className="App-link"
               href="/getStarted"
               >
               Get Started
             </a>
            {/*if logged in*/}

           { props.isLoggedIn?
             <a
              className="App-link"
              href="/dashboard"
              >
              Dashboard
            </a>
            :
             <a
              className="App-link"
              href="/login"
              >
              Login
            </a>
          }

          </header>
      </div>

}

export default Header01;
