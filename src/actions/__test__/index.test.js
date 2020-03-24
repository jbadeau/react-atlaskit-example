import {
    SET_USER,
    LOG_OUT,
    SUBSCRIBE

} from "./../"

import * as actions from './../'

describe('actions', () => {
    it('should return action to set user', () => {
    const label = "Set User";
    const expectedAction = {"payload" : "Set User" , "type" : SET_USER};
        expect(actions.setUser(label)).toEqual(expectedAction);
    })


    it('should return action to log out', () => {
        const expectedAction = {"type" : LOG_OUT};
        expect(actions.logOut()).toEqual(expectedAction);
    })


    it('should return action to subscribe', () => {
        const expectedAction = {"payload" : "Subscribe" , "type" : SUBSCRIBE};
        const label = "Subscribe";
        expect(actions.subscribe(label)).toEqual(expectedAction);
    })

});