import React from 'react';
import ReactDom from 'react-dom';
import MainLayout from './../MainLayout';
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
const div = document.createElement("div");
ReactDom.render(<MainLayout/>, div)
})


it("matches snapshot", () =>{
    const tree = renderer.create(<MainLayout/>).toJSON()
    expect(tree).toMatchSnapshot();
} )
