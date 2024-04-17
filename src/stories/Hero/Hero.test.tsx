import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('should be visible when rendered', () => {
    render(<Hero src="test-file-stub" backgroundColor="#ffffff" />);
    const heroElement = screen.getByRole('img');
    expect(heroElement).toBeVisible();
  });

  it('should indicate disabled state visually', () => {
    render(<Hero src="test-file-stub" disabled={true} />);
    const heroElement = screen.getByRole('img');
    expect(heroElement).toHaveStyle('opacity: 0.5');
  });
});
