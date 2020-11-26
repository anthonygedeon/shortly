import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App/index';

it('it renders without crashing', () => {
    render(<App />);
});
