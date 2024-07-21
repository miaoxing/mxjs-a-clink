import {ListBtn} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';

const getPermission = () => curUrl.index();

const CListBtn = (props) => {
  return <ListBtn to={getPermission()} {...props} />;
};

CListBtn.getPermission = getPermission;

export default CListBtn;
