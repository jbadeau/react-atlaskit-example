import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import {setUser} from '../actions';
import { useHistory } from "react-router-dom";


const MyForm = (props) => {

        let history = useHistory();

        function handleSubmit() {
            console.log("handleClick");
            history.push("/");
        }


        return (
        <>
            <p> Please enter your information</p>

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
        </>
    );
}

export default MyForm;

const ShowTheLocationWithRouter = withRouter(MyForm);
