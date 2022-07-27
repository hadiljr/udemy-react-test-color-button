import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  const element = screen.getByRole('button',{name:'Change to blue'});

  expect(element).toHaveStyle({backgroundColor:'red'});

});

test('button turns blue when clicked',()=>{

});