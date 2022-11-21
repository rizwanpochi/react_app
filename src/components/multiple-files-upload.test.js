import { render, screen } from '@testing-library/react';
import MultiFilesUploadComponent from './multiple-files-upload';
test('button test', () => {
  render(<MultiFilesUploadComponent />);
  const buttonInputEl2 = screen.getByRole("button");
  expect(buttonInputEl2).toBeInTheDocument();
 
});
