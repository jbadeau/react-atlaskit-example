import React from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitleWrapper from '../components/PageTitleWrapper';
import {useSelector} from "react-redux";

const HomePage = (props) =>{
        const store = useSelector(state => state);


        return (
            <ContentWrapper>
                <PageTitleWrapper>
                        {store.homePhrase}
                </PageTitleWrapper>

            </ContentWrapper>

        );
};
export default HomePage;