import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.pushState({}, '', '/');
});

test('renders portfolio navigation', () => {
  render(<App />);
  expect(screen.getAllByText(/jung park/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
});

test('renders the blog page route', () => {
  window.history.pushState({}, '', '/#/blog');
  render(<App />);
  expect(screen.getByRole('heading', { name: /first entry/i })).toBeInTheDocument();
  expect(screen.getByText(/introduction to the blog/i)).toBeInTheDocument();
});
