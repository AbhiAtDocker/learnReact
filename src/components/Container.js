import React, {Component} from 'react';

class AppContainer extends Component{
  constructor(props) {
      super(props);
    }

 render(){
   return(<div id={this.props.id}>
     <p> Main Container</p>
   </div>
 )}
}

export default AppContainer;
