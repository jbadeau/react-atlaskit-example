import React from 'react';
import MainSettingsSection from '../components/MainSettingsSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitleWrapper from '../components/PageTitleWrapper';
import SettingsModal from '../components/SettingsModal';




const SettingsPage = (props) =>{
    return (
      <ContentWrapper>
        <PageTitleWrapper>Settings</PageTitleWrapper>
        <MainSettingsSection />
        <SettingsModal/>
      </ContentWrapper>
    );
};

export default SettingsPage;
