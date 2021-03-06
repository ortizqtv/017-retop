import { render, screen } from '@testing-library/react';
import Label from '../Label';

describe('Label component', () => {
  test('expect a Label component to be created', () => {
    render(<Label>FormPersonal Information</Label>);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with text', () => {
    render(<Label text='FormPersonal Information' />);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(<Label attrs={{ htmlFor: 'for' }}>FormPersonal Information</Label>);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});
