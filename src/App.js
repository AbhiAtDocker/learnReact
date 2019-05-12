import React,{Component} from 'react';
import logo from './logo.svg';
import Header01 from './components/Header01'
import Header02 from './components/Header02'
import AppContainer from './components/Container'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GetStarted from './components/GetStarted'
import Home from './components/Home'
import Login from './components/Login'
import Achievements from './components/Achievements'
import './App.css';

class App extends Component {

 state={
   isLoggedIn:false
 }

handleLoggedIn = (isLoggedIn)=>{
  this.setState({isLoggedIn:isLoggedIn})
}



render(){
  return (
      <Router>
    <div className="App">
      <div>
       <Header01 id="heading01" headerclass="App-header" isLoggedIn={this.state.isLoggedIn}/>
      </div>
     <Switch>
    <div>
       <Route path="/" exact strict component={Home}/>

       <Route path="/getStarted" exact strict component={GetStarted}/>

       <Route path="/achievements" exact strict component={Achievements}/>
        {
          this.state.isLoggedIn ?
           <Route path="/dashboard" exact strict component={Dashboard}/>:
           <Route path="/login" exact strict  render={(props) => <Login {...props} setLoggedIn={this.handleLoggedIn} />} /> 
        }
    </div>
    </Switch>
    <div>
      <Header02 id="heading02" headerclass="App-header"/>
    </div>

    </div>
   </Router>
  )};
}

export default App;
