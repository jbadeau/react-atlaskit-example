import React from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';



const SettingsPage = (props) =>{
    return (
      <ContentWrapper>
        <PageTitle>Settings</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
};

export default SettingsPage;
