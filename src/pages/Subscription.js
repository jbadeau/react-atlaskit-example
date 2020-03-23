import React from 'react';
import SubscriptionSelect from '../components/SubscriptionSelect';
import {useSelector} from "react-redux";
import Lorem from 'react-lorem-component';



const Subscription =()=> {


    const store = useSelector(state => state);
    let options = store.options;
    let subsOptions = store.subsOptions;

    let displaySubscriptions;

    if(subsOptions.length > 0){
        displaySubscriptions = subsOptions.map((value) => <li>{value.label}</li>)
    } else{
        displaySubscriptions =  <h3>You dont have any subscription yet</h3>
}

        return (
            <div>
                <div>
                    <p>This is subscription!</p>
                    <p>
                        <Lorem count={3} />
                    </p>
                </div>
                <div>
                    <h2>Your current subscriptions are: </h2>
                    <ul>
                    {displaySubscriptions}
                    </ul>
                </div>
                <div>
                    <SubscriptionSelect options = {options}/>

                </div>
                </div>
        );
};

export default Subscription;