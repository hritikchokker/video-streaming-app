import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null};
    componentDidMount(){
        window.gapi.load('auth2', ()=>{
            window.gapi.auth2.init({
                client_id: '1020735984967-e8cvuk08k9l06o4a5gcdge19c229etjl.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin',
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
            return null;
        }else if(this.state.isSignedIn){
            // return <div>I am Signed In</div>
            return (
                <button className="ui red google button">
                    Sign Out
                </button>
            )
        }else{
            return(
                <button className="ui red google button"> 
                    <i className="google icon">
                        Sign In with Google
                    </i>
                </button>
            )
        }
    }
    render(){
        return ( 
            <div>{this.renderAuthButton()}</div>
        )
    }
}
export default GoogleAuth;