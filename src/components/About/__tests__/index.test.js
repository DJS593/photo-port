import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import { hasUncaughtExceptionCaptureCallback } from 'process';



afterEach(cleanup);

describe('About component', () => {
  // First Test
  // baseline to verify the component is rendering
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  })
})


