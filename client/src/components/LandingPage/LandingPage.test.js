import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '.';

it('renders landingPage component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
