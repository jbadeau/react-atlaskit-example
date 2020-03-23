import React from "react";
import {gridSize as gridSizeFn} from "@atlaskit/theme";
import {ProductNavigation} from "../components/ProductNavigation";
import {GlobalNavigation} from "../components/GlobalNavigation";

import {
    HeaderSection,
    LayoutManager,
    MenuSection,
    ItemAvatar,
    NavigationProvider,
    ContainerHeader,
    Item
} from "@atlaskit/navigation-next";
import {createStore} from "redux";
import reducer from "../reducers";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import history from "../history/history";
import HomePage from "../pages/HomePage";
import {UserInfo} from "../pages/UserInfo";
import Subscription from "../pages/Subscription";
import SettingsPage from "../pages/SettingsPage";
import {MenuSelector} from "../components/MenuSelector";
import {ProtectedRout} from "../common/ProtectedRout";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const gridSize = gridSizeFn();





const MainLayout = () => {

    const handelClick =() =>{
        console.log("pressed")
        history.push("/")
    }

        const ContainerNavigation = () => (
            <div data-webdriver-test-key="container-navigation">
                <HeaderSection>
                    {({ css }) => (
                        <div
                            data-webdriver-test-key="container-header"
                            css={{
                                ...css,
                                paddingBottom: gridSize * 2.5
                            }}
                        >
                            <ContainerHeader
                                before={itemState => (
                                    <ItemAvatar
                                        itemState={itemState}
                                        appearance="square"
                                        size="large"

                                    />
                                )}
                                text="Choose information"
                                subText="Customer info information"
                                onClick={handelClick}
                            />
                        </div>
                    )}
                </HeaderSection>
                <MenuSection>
                    {({ className }) => (
                        <div className={className}>
                         <MenuSelector/>
                        </div>
                    )}
                </MenuSection>
            </div>
        );
        return (
            <Provider store={store}>
                <Router histroy ={history}>
                <NavigationProvider>
                    <LayoutManager
                        globalNavigation={GlobalNavigation}
                        productNavigation={ProductNavigation}
                        containerNavigation={ContainerNavigation}
                    >
                        <div
                            data-webdriver-test-key="content"
                            style={{padding: `${gridSize * 4}px ${gridSize * 5}px`}}
                        >
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route exact path="/user" component={UserInfo}/>
                                <ProtectedRout exact path="/subscribe" component={Subscription}/>
                                <ProtectedRout exact path="/settings" component={SettingsPage}/>
                            </Switch>

                        </div>
                    </LayoutManager>
                </NavigationProvider>
                </Router>
            </Provider>
        );
}
export default MainLayout;
