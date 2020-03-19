import React from 'react';
import App from '../components/App';
import HomePage from '../pages/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SettingsPage from "../pages/SettingsPage";
import {Grid, GridColumn} from '@atlaskit/page';
import Subscription from '../pages/Subscription';
import {UserInfo} from '../pages/UserInfo';
import {Provider} from 'react-redux';
import history from '../history/history';
import { useDispatch, useSelector } from 'react-redux';



import reducer from "../reducers";

import {createStore} from 'redux';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


const MainRouterBuf = () => (
    <Provider store={store}>
        <React.Fragment>
        <Router history={history}>
            <Grid layout="fluid" spacing="compact">
                <GridColumn medium={4}>
                    <App/>
                </GridColumn>
                <GridColumn medium={8}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/us" element={<UserInfo/>}/>
                        <Route path="/sub" element={<Subscription/>}/>
                        <Route path="/set" element={<SettingsPage/>}/>
                    </Routes>
                </GridColumn>
            </Grid>
        </Router>
        </React.Fragment>
    </Provider>
);

export default MainRouterBuf;

