import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.click(getByText(/Log In/));
    expect(handleSubmit).toBeCalled();
  });
});
