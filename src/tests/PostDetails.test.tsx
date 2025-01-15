import React from 'react';
import { render } from '@testing-library/react';
import PostDetails from '../pages/PostDetails';

describe('Post Details', () => {
  it('should render the page', () => {
    const result = render(<PostDetails />);

    expect(result).toBeTruthy()
  });
})
