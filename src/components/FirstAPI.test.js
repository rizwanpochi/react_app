import { render, screen } from '@testing-library/react';
import FirstAPI from './FirstAPI';


describe('api test', () => {
    it("test", async () => {
        render(<FirstAPI />);
    }); 
  });
