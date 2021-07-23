import React from 'react';
import { Card } from 'reactstrap';

const CustomerDetails = ({email}) => {
    return (
        <div style={{backgroundColor: 'grey'}}>
        vbfubvif
            <Card>
                <p>
                    Email: <span>{email}</span>
                </p>
                <p>
                    First Name: <span>Shahab</span>
                </p>
                <p>
                    Last Name: <span>Hashmi</span>
                </p>
                <a href="#">
                    View more details
                </a>
            </Card>
        </div>
    );
}

export default CustomerDetails;