import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';

// const StreamCreate =() => {
//     return (
//         <div>Stream Create</div>
//     )
// }

class StreamCreate extends React.Component {
    renderError({error,touched}){
        if(touched &&error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    onSubmit = (formValues) => {
        // event.preventDefault();
        this.props.createStream(formValues);
        console.log(formValues);
        
    }
    renderInput = ({ input,label, meta })=>{
        const className= `field ${meta.error && meta.touched? 'error': ''}`;
        // formProps
        // console.log(formProps,"inp ut");
        
        return(
            <div className={className}>
            <label>{label}</label>
            <input autoComplete="off" {...input} />
            {this.renderError(meta)}
            {/* <div>{meta.error}</div> */}
            </div>
             /* <input {...formProps.input} />
              <input onChange={formProps.input.onChange} value={formProps.input.value} /> */
         )
    }
    render(){
        // console.log(this.props); 
        return (
            // <div>Stream Create</div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field component={this.renderInput} name="title" label="Enter Title" />
                <Field component={this.renderInput} name="description" label="Enter Description" />
                <button className="ui button primary" >Submit</button>
            </form>
        )
    } 
}
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter some description";
    }
    return errors;
}
// connect function usage
// export default connect()(reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate));


const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped)