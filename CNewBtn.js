import {NewBtn} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';

const CNewBtn = (props) => (
  <NewBtn href={curUrl.new()} {...props}/>
);

export default CNewBtn;
