import React from 'react';
import {Field, reduxForm} from 'redux-form';

// const StreamCreate =() => {
//     return (
//         <div>Stream Create</div>
//     )
// }

class StreamCreate extends React.Component {
    renderInput({ input,label }){
        // formProps
        // console.log(formProps,"input");
        return(
            <div className="field">
            <label>{label}</label>
            <input {...input} />
            </div>
             /* <input {...formProps.input} />
              <input onChange={formProps.input.onChange} value={formProps.input.value} /> */
         )
    }
    render(){
        // console.log(this.props); 
        return (
            // <div>Stream Create</div>
            <form className="ui form">
                <Field component={this.renderInput} name="title" label="Enter Title" />
                <Field component={this.renderInput} name="description" label="Enter Description" />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);