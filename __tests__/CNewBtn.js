import CNewBtn from '../CNewBtn';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('CNewBtn', () => {
  test('basic', () => {
    const result = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <CNewBtn/>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(result.container).toMatchSnapshot();
  });
});
