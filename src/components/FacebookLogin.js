import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookSignin extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            pic: ''
        }
    }

    responseFacebook = res => {
        this.setState({
            isLoggedIn: true,
            userID: res.userID,
            name: res.name,
            email: res.email,
            pic: res.picture.data.url
        });
        console.log(res);
    };

    componentClicked = () => alert('FacebookLogin');

    render(){

        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.pic} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            )
        }else{
            fbContent = (
                <FacebookLogin      
                    appId="493719038356002"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            )
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}