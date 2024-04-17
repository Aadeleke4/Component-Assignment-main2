
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
    test('is visible to the user', () => {
      render(<Button label="Test Button" />);
      const button = screen.getByText('Test Button');
      expect(button).toBeVisible();
    });
  });

  describe('Button Component', () => {
    test('changes background color when disabled', () => {
      render(<Button label="Test Button" disabled={true} />);
      const button = screen.getByText('Test Button');
      // Assuming the background color changes to gray when disabled
      expect(button).toHaveStyle('background-color: gray');
    });
  });