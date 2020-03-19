import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import {setUser} from '../actions';
import { useDispatch } from 'react-redux';

const MyForm = (props) => {
    const dispatch = useDispatch();


    function handleClick () {
        console.log("handleClick pressed");
        if(props.history){
            props.history.push('/');}
    }


    return (
        <>
            <p> Please enter your information</p>

            <Form onSubmit={data => {
                    dispatch(setUser(data))}
            }>
                {({formProps}) => (
                    <form {...formProps}>
                        <Field name="firstname" defaultValue="" label="First Name" isRequired>
                            {({fieldProps}) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="lastname" defaultValue="" label="Last Name" isRequired>
                            {({fieldProps}) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="email" defaultValue="" label="Email" isRequired>
                            {({fieldProps}) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="phone" defaultValue="" label="Phone" isRequired>
                            {({fieldProps}) => <TextField {...fieldProps} />}
                        </Field>
                        <Button type="submit" appearance="primary" onClick = {() => handleClick}
                        >
                            Submit
                        </Button>
                    </form>
                )}
            </Form>
        </>
    );
}

export default MyForm;