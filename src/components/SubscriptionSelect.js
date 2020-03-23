import React, {useState} from 'react';
import Select from '@atlaskit/select';
import Button from "@atlaskit/button";
import {subscribe} from "../actions";
import {useDispatch} from 'react-redux';
import Modal, {ModalTransition} from "@atlaskit/modal-dialog";


const SubscriptionSelect = (props) => {
    let values = [];
    const dispatch = useDispatch();

    let [isOpen,setState]=useState(false);

    const open = () =>  {setState(true);}
    const close = () =>  {
        setState(false);
    dispatch(subscribe(values));
    };
    const actions = [{ text: "Subscription", onClick: close}];
    const {options} = props;
    console.log(options)


    return (
        <>
                <Button onClick={open} appearance="primary">Check Subscriptions</Button>
                <ModalTransition>
                    {isOpen && (
                        <Modal actions={actions} onClose={close} heading="Subscription List">
                            <Select
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                options={options}
                                isMulti
                                placeholder="Choose you subscription"
                                onChange={(value) => {
                                    values = value
                                }}
                            />
                        </Modal>
                    )}
                </ModalTransition>
            </>
    );
};

export default SubscriptionSelect;


