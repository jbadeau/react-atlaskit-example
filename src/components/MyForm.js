import React from 'react';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';

const MyForm = () => (
    <>
    <p> Please enter your information</p>

    <Form onSubmit={data => console.log('form data', data)}>
        {({ formProps }) => (
            <form {...formProps}>
                <Field name="firstname" defaultValue="" label="first name" isRequired>
                    {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Field name="lastname" defaultValue="" label="last name" isRequired>
                    {({ fieldProps }) => <TextField {...fieldProps} />}
                </Field>
                <Button type="submit" appearance="primary">
                    Submit
                </Button>
            </form>
        )}
    </Form>
        </>
);

export default MyForm;