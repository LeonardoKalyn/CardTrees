import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

describe('<Header />', () => {
  test('renders correctly', () => {
    const expectedText = 'Tree Cards'

    const { getByText } = render(<Header />);
  
    const headerText = getByText(expectedText);
  
    expect(headerText).toBeInTheDocument();
  });
});
