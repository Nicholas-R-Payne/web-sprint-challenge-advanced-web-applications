// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

test('spinner renders without errors when on', () => {
  render(<Spinner on={true} />);
});

test('spinner renders without errors when off', () => {
  render(<Spinner on={false} />);
});

test('spinner shows "please wait" when on', () => {
  render(<Spinner on={true} />);
  let waitText = screen.queryByText("Please wait...", { exact: false });
  expect(waitText).toBeInTheDocument();
  expect(waitText).toBeTruthy();
  expect(waitText).toBeVisible();
});

test('spinner does not show "please wait" when off', () => {
  render(<Spinner on={false} />);
  let waitText = screen.queryByText("Please wait...", { exact: false });
  expect(waitText).toBeFalsy();
  expect(waitText).toBe(null);
});