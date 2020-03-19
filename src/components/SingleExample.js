import React from 'react';
import Select from '@atlaskit/select';

const SingleExample = (props) => {
    console.log(props);

    return (
        <Select
            className="single-select"
            classNamePrefix="react-select"
            options={props.options}
            placeholder="Choose you subscription"
        />
    );
};

export default SingleExample;