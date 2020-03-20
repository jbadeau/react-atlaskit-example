import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector } from 'react-redux';


export const ProtectedRout = ({component: Component, ...rest}) => {
    const store = useSelector(state => state);

    return (
        <Route {...rest}
               render={props => {
                   console.log("store: "+ store);
                   if(store.isLogged) {
                       return <Component {...props} />;
                   }else{
                       return <Redirect to ={
                           {
                               pathname: '/',
                               state: {
                                   from: props.location
                               }
                           }
                       }
                       />

                   }
               }}
        />
    );
};