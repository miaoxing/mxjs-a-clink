import {NewBtn} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';

const getPermission = () => curUrl.new();

const CNewBtn = (props) => (
  <NewBtn to={getPermission()} {...props}/>
);

CNewBtn.getPermission = getPermission;

export default CNewBtn;
