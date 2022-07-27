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