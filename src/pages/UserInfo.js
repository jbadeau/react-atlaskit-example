import React from 'react';
import MyForm from "../components/MyForm";
import {useSelector } from 'react-redux';
import Button from '@atlaskit/button';
import { useHistory } from "react-router-dom";


export const UserInfo = (props) =>{
    const store = useSelector(state => state);
    let users = store.users;
    let firstname, lastname, email, phone;
    let history = useHistory();


    if(users) {
        firstname = users.firstname;
        lastname = users.lastname;
        email = users.email;
        phone = users.phone;
    }

    let inforScope;

    if(users === null){
        inforScope =  <MyForm history = {props.history} /> }
    else {
        inforScope  = <div>

            <Button onClick={() => {props.history.push('/')}}>Home</Button>
            <h3>firstname: {firstname}</h3>
            <h3>lastname: {lastname}</h3>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
        </div>
    }

        return (inforScope);
}