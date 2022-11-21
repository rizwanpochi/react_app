import { render, screen } from '@testing-library/react';
import FilesUploadComponent from './files-upload-component';
test('button test', () => {
  render(<FilesUploadComponent />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
 
});
