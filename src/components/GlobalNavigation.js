import {GlobalNav} from "@atlaskit/navigation-next";
import React from "react";
import Avatar from "@atlaskit/avatar";

const globalNavSecondaryItems = [

    {
        id: "10-composed-navigation-2",
        icon: () => (
            <Avatar
                borderColor="transparent"
                isActive={false}
                isHover={false}
                size="large"
            />
        ),
        label: "Profile",
        size: "small"
    }
];

const globalNavPrimaryItems = [

];


export const GlobalNavigation = () => (
    <div data-webdriver-test-key="global-navigation">
        <GlobalNav
            primaryItems={globalNavPrimaryItems}
            secondaryItems={globalNavSecondaryItems}
        />
    </div>
);