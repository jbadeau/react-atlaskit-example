import ShallowRenderer from "react-test-renderer/shallow";
import {MenuSelector} from "../MenuSelector";
import {Link} from "react-router-dom";
import {Item, MenuSection} from "@atlaskit/navigation-next";
import React from "react";

const renderer = new ShallowRenderer();
renderer.render(<MenuSelector/>);
const result = renderer.getRenderOutput();

expect(result.props.children).toEqual([
            <div>
                <Link to={`/`}><Item text="Home"/></Link>
                <Link to={`/user`}><Item text='User Info'/></Link>
                <Link to={`/settings`}><Item text='Settings'/></Link>
                <Link to={`/subscribe`}><Item text='Subscription'/></Link>
            </div>
]);