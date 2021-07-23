import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import AgentScreen from './screen/AgentScreen';
import SideBar from './components/SideBar';
 
class App extends React.Component{


  constructor(){
    super();
    this.state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        pic: '',
        response: '',
    }
  }

  responseFacebook = res => {
      this.setState({
          isLoggedIn: true,
          userID: res.userID,
          name: res.name,
          email: res.email,
          pic: res.picture.data.url,
          response: res
      });
      //console.log(JSON.stringify(res));
  };

  componentClicked = () => alert('FacebookLogin');
  render() {

    let Content;
        if(this.state.isLoggedIn){
            Content = (
              <div>
                <Row>
                  <Col lg="1">
                    <SideBar />
                  </Col>
                  <Col lg="11">
                    <AgentScreen response={this.state.response} />
                  </Col>
                </Row>
              </div>
            )
        }else{
            Content = (
              <div>
                <p>To get started login with Facebook</p>
                <FacebookLogin      
                    appId="493719038356002"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
              </div>
            )
        }

    return (
      <div className="App">
        {Content}
      </div>
    );
  }
}

export default App;
