import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  test('expect a Button component to be created', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
