import React from 'react';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import MainSection from '../components/MainSection';
import Button, { ButtonGroup } from '@atlaskit/button';


const HomePage = (props) =>{

        return (
            <ContentWrapper>
                <PageTitle>
                This is HomePage
                </PageTitle>
                <MainSection/>
                <ButtonGroup>
                    <Button
                        appearance="primary">Click to view Atlaskit modal</Button>
                    <Button>click to view Atlaskit flag</Button>
                </ButtonGroup>

            </ContentWrapper>

        );
};
export default HomePage;