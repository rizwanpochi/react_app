import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders learn react link', () => {
  render(< App/>);
  const firstElem = screen.getByText(/first/i);
  const commonElem = screen.getByText(/common/i);
  const mergedElem = screen.getByText(/merged/i);
  expect(firstElem).toBeInTheDocument();
  expect(commonElem).toBeInTheDocument();
  expect(mergedElem).toBeInTheDocument();
});
