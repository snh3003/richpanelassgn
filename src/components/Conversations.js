import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faBars } from '@fortawesome/free-solid-svg-icons';


const Conversations = (props) => {
    return (
        <Row>       
            <Col>
                <FontAwesomeIcon icon={faBars} color="grey" style={{margin: '13px'}} size="lg"/>
            </Col>
            <Col>
                <h2>
                    Conversations
                </h2>
            </Col>
            <Col>
                <FontAwesomeIcon icon={faRedoAlt} color="grey" size="lg" style={{margin: '13px'}}/>
            </Col>                                
        </Row>
    );
}

export default Conversations;