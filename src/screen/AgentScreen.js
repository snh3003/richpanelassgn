import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Conversations from '../components/Conversations';
import ConversationChat from './ConversationChat';
import ProfileCard from '../components/ProfileCard';
import CustomerDetails from '../components/CustomerDetails';
import Chat from '../components/Chat';

class AgentScreen extends React.Component{

    constructor(props){
        //console.log("props: ",props.response.picture.data.url);
        super();
        this.state = {
            isLoggedIn: false,
            name: props.response.name,
            email: props.response.email,
            pic: props.response.picture.data.url
        }
      }

    render(){
        return (
            <div>
                {/* <SideBar /> */}
                <Container>
                    <Row>
                        <Col lg="4" style={{marginLeft: '-130px'}}>
                            <Row>
                                <Conversations />
                            </Row>
                            <Row>
                                <ConversationChat 
                                    name="Amit RG" 
                                    fb="Facebook DM" 
                                    availability="Awesome Product" 
                                    msg="Hey There! I probably did one of the bes..."
                                />
                            </Row>
                            <Row>
                                <ConversationChat 
                                    name="Hiten Saxena" 
                                    fb="Facebook Post" 
                                    availability="Available in store?" 
                                    msg="Hi do you have any T-Shirt available in st..."
                                />
                            </Row>
                        </Col>
                        <Col lg="5">
                            <Chat name={this.state.name} pic={this.state.pic}/>
                        </Col>
                        <Col lg="3">
                            <ProfileCard pic={this.state.pic} name={this.state.name} email={this.state.email}/>
                            <CustomerDetails email={this.state.email}/>
                        </Col>
                    </Row>
                </Container>
            
            </div>
        )
    }
}

export default AgentScreen;