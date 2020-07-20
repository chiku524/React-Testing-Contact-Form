// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

import React from 'react';
import {render, screen, getByTestId, fireEvent} from '@testing-library/react';
import ContactForm from './components/ContactForm';
import App from '../src/App';

test('First name renders correctly', () => {
    const {getByTestId} = render(<ContactForm />);

    const firstNameInput = screen.getByTestId('first-name');

    fireEvent.change(firstNameInput, {
        target: {value: 'Nico'}
    })

    expect(firstNameInput).toHaveValue('Nico')
})

test('Last name renders correctly', () => {
    const {getByTestId} = render(<ContactForm />);

    const lastNameInput = getByTestId('lastName');

    fireEvent.change(lastNameInput, {
        target: {value: 'Chikuji'}
    })

    expect(lastNameInput).toHaveValue('Chikuji');
})

test('Email renders correctly', () => {
    const {getByTestId} = render(<ContactForm />);

    const emailInput = getByTestId('email');

    fireEvent.change(emailInput, {
        target: {value: 'chiku524@icloud.com'}
    })

    expect(emailInput).toHaveValue('chiku524@icloud.com');
})

test('Message renders correctly', () => {
    const {getByTestId} = render(<ContactForm />);

    const messageInput = getByTestId('message');

    fireEvent.change(messageInput, {
        target: {value: 'Much testing needed'}
    })

    expect(messageInput).toHaveValue('Much testing needed');
})