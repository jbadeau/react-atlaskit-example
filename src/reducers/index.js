import {
    LOG_OUT,
    SET_USER,

} from "../actions"

const initialState = {
    users: null,

    options: [
        { label: 'TechCrunch.com', value: 'TechCrunch.com' },
        { label: 'TheNextWeb.com', value: 'TheNextWeb.com' },
        { label: 'Wired.com', value: 'Wired.com' },
        { label: 'Tech2.com', value: 'Tech2.com' },
        { label: 'Gizmodo.com', value: 'Gizmodo.com' },
        { label: 'TheVerge.com', value: 'TheVerge.com' },
        { label: 'TechRadar.com', value: 'TechRadar.com' },
    ]

};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_USER:
            return {
        ...state,
               users: action.payload
            };

        case LOG_OUT:
            return {
                ...state,
                users: null
            };

        default:
            return state;
    }

}


