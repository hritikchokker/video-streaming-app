import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component {
    // state = { isSignedIn: null};
    componentDidMount(){
        window.gapi.load('auth2', ()=>{
            window.gapi.auth2.init({
                client_id: '1020735984967-e8cvuk08k9l06o4a5gcdge19c229etjl.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.onAuthChange();
                // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    } 
    onAuthChange = isSignedIn =>{
        // this.setState({isSignedIn: this.auth.isSignedIn.get()});
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignInClick = () =>{
        this.auth.signIn();

    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            // return <div>I am Signed In</div>
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                        Sign Out
                </button>
            )
        }else{
            return(
                <button onClick={this.onSignInClick} className="ui red google button"> 
                    <i className="google icon"/>
                        Sign In with Google
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

const mapStateToProps = state =>{
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);