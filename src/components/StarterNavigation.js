import React from 'react'
import {Link} from 'react-router-dom';
import Nav, {AkContainerTitle,} from '@atlaskit/navigation';
import Button from '@atlaskit/button';
import Table, {Row, Cell} from '@atlaskit/table-tree';


export default class StarterNavigation extends React.Component {
    render() {
        return (
            <Nav
                isOpen={true}
                width={304}
                onResize={304}
                containerHeaderComponent={() => (
                    <AkContainerTitle
                    text="Customer info portal"
                    />
                )}
            >
                <Table>
                    <Row>
                        <Cell>
                            <Button><Link to={`/`}>Home</Link></Button>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Button><Link to={`/us`}>User Info</Link></Button>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Button><Link to={`/set`}>Settings</Link></Button>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Button><Link to={`/sub`}>Subscription</Link></Button>
                        </Cell>
                    </Row>
                </Table>
            </Nav>

        );

    }

}