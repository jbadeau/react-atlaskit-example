import React from 'react';
import {Link} from "react-router-dom";
import {Item, MenuSection} from "@atlaskit/navigation-next";

export const MenuSelector = () => {
    return (
        <MenuSection>
            {({className}) => (

                <div className={className}>
                    <Link to={`/`}><Item text="Home"/></Link>
                    <Link to={`/user`}><Item text='User Info'/></Link>
                    <Link to={`/settings`}><Item text='Settings'/></Link>
                    <Link to={`/subscribe`}><Item text='Subscription'/></Link>
                </div>
            )
            }
        </MenuSection>
    )
}


