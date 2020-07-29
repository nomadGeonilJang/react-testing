import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        loginFields: {
          email: 'test@test',
          password: '1234',
        },
      })
    );
  });

  it('renders LoginPage', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(container).toHaveTextContent('Log In');
  });
});
