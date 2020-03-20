import React from 'react';
import ReactDOM from 'react-dom';
import MainRouterBuf from './MenuSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainRouterBuf />, div);
  ReactDOM.unmountComponentAtNode(div);
});
