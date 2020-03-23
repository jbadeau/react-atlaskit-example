import {
    LOG_OUT,
    SET_USER,
    SUBSCRIBE

} from "../actions"

const initialState = {
    users: null,

    isLogged: false,

    options: [
        { label: 'TechCrunch.com', value: 'TechCrunch.com' },
        { label: 'TheNextWeb.com', value: 'TheNextWeb.com' },
        { label: 'Wired.com', value: 'Wired.com' },
        { label: 'Tech2.com', value: 'Tech2.com' },
        { label: 'Gizmodo.com', value: 'Gizmodo.com' },
        { label: 'TheVerge.com', value: 'TheVerge.com' },
        { label: 'TechRadar.com', value: 'TechRadar.com' },
    ],

    subsOptions: []

};

export default (state = initialState, action) => {

    const stateOptionsManipulations = (state, action) => {
        let stOptionCopy = state.options;

        const outPutArray = stOptionCopy.filter(
            pair => !action.payload.some(
                innerPair =>
            innerPair.label === pair.label && innerPair.value === pair.value
            )
        );
        return outPutArray;
    };

    const stateSubOptionsManipulations = (state, action) => {
        const res = state.subsOptions.concat(action.payload);
        return res;
    }

    switch (action.type) {

        case SET_USER:
            return {
        ...state,
               users: action.payload,
                isLogged: true,
            };

        case LOG_OUT:
            return {
                ...state,
                users: null, isLogged: false
            };

        case SUBSCRIBE:
            return {
                ...state,
                subsOptions: stateSubOptionsManipulations(state, action),
                options: stateOptionsManipulations(state, action)
            };

        default:
            return state;
    }

}


