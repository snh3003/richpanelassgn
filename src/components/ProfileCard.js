import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faUserCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

const ProfileCard = ({pic, name, email}) => {
    return (
        <div style={{
            padding: '20px'
        }}>
            <img src={pic} alt={name} style={{borderRadius: '25px'}}/>
            <h4 style={{color: 'black', padding: '10px'}}>{name}</h4>
            <p style={{color: 'grey'}}> 
                <FontAwesomeIcon icon={faDotCircle} color="grey" size="lg" style={{padding: '3px'}}/> 
                offline
            </p>
            <Button color="white" style={{border: "1px solid grey"}}>
                <FontAwesomeIcon icon={faPhone} color="grey" size="lg" style={{padding: '3px'}}/>
                Call
            </Button>
            <Button color="white" style={{border: "1px solid grey"}}>
                <FontAwesomeIcon icon={faUserCircle} color="grey" size="lg" style={{padding: '3px'}}/>
                Profile
            </Button>
        </div>
    );
}

export default ProfileCard;