import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

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
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});
  expect(checkbox).not.toBeChecked();

});

test('checkbox change button enable state',()=>{
  render(<App/>);

  const button = screen.getByRole('button',{name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

  fireEvent.click(checkbox);

  expect(button).toBeDisabled()

  fireEvent.click(checkbox);
  expect(button).toBeEnabled()

})

test('Disabled button has gray background and reverts to red',()=>{
  render(<App/>);

  const button = screen.getByRole('button',{name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

  fireEvent.click(checkbox);

  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor:'gray'});

  fireEvent.click(checkbox);
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor:'red'});

})

test('Disabled button has gray background and reverts to blue',()=>{
  render(<App/>);

  const button = screen.getByRole('button',{name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'});

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor:'gray'});

  fireEvent.click(checkbox);
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor:'blue'});

})

describe('spaces before camle-sace capital letters',()=>{
  test('Works for no inner capital letters',()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter',()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters',()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})

