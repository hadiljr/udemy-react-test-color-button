import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  //find element
  const button = screen.getByRole('button',{name:'Change to blue'});

  //expect background color red
  expect(button).toHaveStyle({backgroundColor:'red'});

  //click button
  fireEvent.click(button)

  //expect background color blue
  expect(button).toHaveStyle({backgroundColor:'blue'});

  //expect the button text change
  expect(button.textContent).toBe('Change to red')

});

test('initial conditions', () => {
  render(<App/>);

  //check that the button starts out enabled
  const button = screen.getByRole('button',{name:'Change to blue'});
  expect(button).toBeEnabled();

  //check that th checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('checkbox change button enable state',()=>{
  render(<App/>);

  const button = screen.getByRole('button',{name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(button).toBeDisabled()

  fireEvent.click(checkbox);

  expect(button).toBeEnabled()

})