import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css';
import richpanel from '../assets/richpanel.png';
import man from '../assets/man.jpg';

const SideBar = (props) => {
    return (
        <div className="side-bar">
			<div className="top">
				<div className="icon-wrapper">
                    <img src={richpanel} alt="richpanel" width="30px" />
					{/* <i className="fa fa-refresh" aria-hidden="true"></i> */}
				</div>
				<div className="icon-wrapper">
                    <FontAwesomeIcon icon={faInbox}/>
					{/* <i className="fa fa-inbox" aria-hidden="true"></i> */}
				</div>
				<div className="icon-wrapper">
                    <FontAwesomeIcon icon={faUsers}/>
					{/* <i className="fa fa-users" aria-hidden="true"></i> */}
				</div>
				<div className="icon-wrapper">
                    <FontAwesomeIcon icon={faChartLine}/>
					{/* <i className="fa fa-line-chart" aria-hidden="true"></i> */}
				</div>
			</div>
			<div className="bottom">
				<div className="icon-wrapper avatar">
					<div className="green-dot"></div>
					<img src={man} alt="man" />
				</div>
			</div>
		</div>
    );
}

export default SideBar;