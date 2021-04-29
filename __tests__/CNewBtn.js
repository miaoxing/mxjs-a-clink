import React from 'react';
import CNewBtn from '../CNewBtn';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';

describe('CNewBtn', () => {
  test('basic', () => {
    const result = render(<MemoryRouter>
      <CNewBtn/>
    </MemoryRouter>);

    expect(result.container).toMatchSnapshot();
  });
});
