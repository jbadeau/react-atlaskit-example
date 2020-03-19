import React from 'react';
import MyForm from "../components/MyForm";
import {useSelector } from 'react-redux';
import Button from '@atlaskit/button';
import ContentWrapper from '../components/ContentWrapper';
import {logOut} from '../actions'
import { useDispatch } from 'react-redux';




export const UserInfo = (props) =>{
    const store = useSelector(state => state);
    const dispatch = useDispatch();
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
        inforScope =  <MyForm history = {props.history} /> }
    else {
        inforScope  = <ContentWrapper>

            <Button onClick={() => {
                dispatch(logOut())
                props.history.push('/')
            }}>Logout</Button>
            <h3>firstname: {firstname}</h3>
            <h3>lastname: {lastname}</h3>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
        </ContentWrapper>
    }

        return (inforScope);
}