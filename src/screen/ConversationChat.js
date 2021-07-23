import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

const ConversationChat = ({name, fb, availability, msg}) => {
    return (
        <div>
            <Row style={{marginLeft: '-75px'}}>
                <Col>                
                    <Input type="checkbox" style={{margin: '20px'}}/>
                </Col>
                <Col>
                    <p style={{marginLeft: '-325px', paddingTop: '5px'}}>
                        {name}
                    </p>
                    <p style={{marginLeft: '-325px', marginTop:'-10px'}}>
                        {fb}
                    </p>
                </Col>
            </Row>
            <Row style={{paddingLeft: '50px'}}>
               {availability}
            </Row>
            <Row style={{paddingLeft: '50px' , color: 'grey'}}>
               {msg}
            </Row>
        </div>
    );
}

export default ConversationChat;