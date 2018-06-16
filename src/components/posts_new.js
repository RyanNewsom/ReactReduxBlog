import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"                    
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Content"                    
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }
    
    if(!values.categories) {
        errors.categories = "Enter some categories";
    }

    if(!values.content) {
        errors.content = "Enter some content";
    }
    //validate the inputs

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);