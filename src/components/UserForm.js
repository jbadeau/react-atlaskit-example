import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import {setUser} from '../actions';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ContentWrapper from '../components/ContentWrapper';



const UserForm = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();

        function handleSubmit() {
            console.log("handleClick");
            history.push("/");
        }


        return (
        <ContentWrapper>
            <ContentWrapper>
            <h2> Please enter your information</h2>

            <Form onSubmit={data => {
                    dispatch(setUser(data))
                handleSubmit()
            }
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

                        <Button type="submit" appearance="primary"
                        >
                            Submit
                        </Button>
                    </form>
                )}
            </Form>
        </ContentWrapper>
        </ContentWrapper>
    );
}

export default UserForm;

