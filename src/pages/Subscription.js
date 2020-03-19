import React from 'react';
import SingleExample from '../components/SingleExample';
import {useSelector} from "react-redux";
import Lorem from 'react-lorem-component';



const Subscription =()=> {
    const store = useSelector(state => state);
    let options = store.options;

        return (
            <div>
                <div>
                    <p>This is subscription!</p>
                    <p>
                        <Lorem count={3} />
                    </p>
                </div>
                <div>

                </div>
                <SingleExample options = {options}/>
                </div>
        );
};

export default Subscription;