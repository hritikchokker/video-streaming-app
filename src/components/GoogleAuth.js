import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null};
    componentDidMount(){
        window.gapi.load('Client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '1020735984967-e8cvuk08k9l06o4a5gcdge19c229etjl.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    } 
    onAuthChange = () =>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont Know if we are signed in </div>
        }else if(this.state.isSignedIn){
            return <div>I am Signed In</div>
        }else{
            return <div>I am not Signed In</div>
        }
    }
    render(){
        return ( 
            <div>{this.renderAuthButton()}</div>
        )
    }
}
export default GoogleAuth;