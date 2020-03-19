import React, {Component} from 'react';
import MyForm from "../components/MyForm";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@atlaskit/button';





export const UserInfo = (props) =>{
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    let users = store.users;
    let firstname, lastname, email, phone;

    if(users) {
        firstname = users.firstname;
        lastname = users.lastname;
        email = users.email;
        phone = users.phone;
    }



    let inforScope;

    if(users === null){
        inforScope =  <MyForm /> }
    else {
        inforScope  = <div>
            <Button onClick={() => {props.history.push('/')}}>Logout </Button>
            <h3>firstname: {firstname}</h3>
            <h3>lastname: {lastname}</h3>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
        </div>
    }

        return (


                inforScope

        );
}