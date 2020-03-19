import React from 'react';
import App from '../components/App';
import HomePage from '../pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SettingsPage from "../pages/SettingsPage";
import {Grid, GridColumn} from '@atlaskit/page';
import Subscription from '../pages/Subscription';
import {UserInfo} from '../pages/UserInfo';
import {Provider} from 'react-redux';
import history from '../history/history';
import reducer from "../reducers";
import {createStore} from 'redux';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


const MainRouterBuf = () => (
    <Provider store={store}>

        <Router histroy ={history}>
            <Grid layout="fluid" spacing="compact">
                <GridColumn medium={4}>
                    <App/>
                </GridColumn>
                <GridColumn medium={6}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/us" component={UserInfo}/>
                        <Route exact path="/sub" component={Subscription}/>
                        <Route exact path="/set" component={SettingsPage}/>
                    </Switch>
                </GridColumn>
            </Grid>
        </Router>
    </Provider>
);

export default MainRouterBuf;

