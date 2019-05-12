import React,{Component} from 'react';
import {Button,Form,FormGroup, Label,Input,Container, Row, Col} from 'reactstrap'
import '../App.css'
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../action/loginAction';

class Login extends Component{
  state = {
       user_email:'',
       usser_password:'',
       user_type:'client'
     }

     handleSubmit = event => {
         event.preventDefault();

          if(this.state.user_email.trim()&& this.state.user_password.trim()){
              this.props.loginUser({
                  user_email:this.state.user_email,
                  user_password:this.state.user_password,
                   user_type:this.state.user_type
              })
          }

          this.props.setLoggedIn(true)
      }

      handleChange = event  => {
          this.setState({ [event.target.name]: event.target.value });
      };




  render(){

    return(<div>
     <Container>
       <Form className="login-form" onSubmit={e=>this.handleSubmit(e)}>
         <Row>
         <Col>
          <FormGroup>
             <Label>Email</Label>
             <Input type="email" name="user_email" placeholder="Email" onChange={e=>this.handleChange(e)}/>
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col>
          <FormGroup>
             <Label>Password</Label>
             <Input type="password" name="user_password" placeholder="Password" onChange={e=>this.handleChange(e)}/>
          </FormGroup>
          </Col>
      </Row>
      <Row>
         <Col><Button> Log In</Button></Col>
        </Row>
       </Form>
      </Container>
       </div>);
 }



}


function matchDispatchToProps(dispatch){
     return bindActionCreators({ loginUser: LoginUser}, dispatch)
 }
function mapStateToProps(state){
    return {
        user: state.newUser
    }

}

export default connect(mapStateToProps,matchDispatchToProps)(Login);
