import React from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import ModalBasic from '../components/ModalBasic';




const SettingsPage = (props) =>{
    return (
      <ContentWrapper>
        <PageTitle>Settings</PageTitle>
        <MainSection />
        <ModalBasic/>
      </ContentWrapper>
    );
};

export default SettingsPage;
