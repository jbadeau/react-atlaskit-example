import React from 'react';
import App from '../components/App';
import HomePage from '../pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SettingsPage from "../pages/SettingsPage";
import {Grid, GridColumn} from '@atlaskit/page';
import Subscription from '../pages/Subscription';
import {UserInfo} from '../pages/UserInfo';
import {Provider} from 'react-redux';



import reducer from "../reducers";

import {createStore} from 'redux';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


const MainRouterBuf = () => (
    <Provider store={store}>
        <Router>
            <Grid layout="fluid" spacing="compact">
                <GridColumn medium={4}>
                    <App/>
                </GridColumn>
                <GridColumn medium={8}>
                    <Switch>
                        <Route path="/" element={HomePage}/>
                        <Route path="/us" element={UserInfo}/>
                        <Route path="/sub" element={Subscription}/>
                        <Route path="/set" element={SettingsPage}/>
                    </Switch>
                </GridColumn>
            </Grid>
        </Router>
    </Provider>
);

export default MainRouterBuf;

