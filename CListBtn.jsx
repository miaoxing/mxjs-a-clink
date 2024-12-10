import {ListBtn} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';

const CListBtn = (props) => {
  return <ListBtn to={curUrl.index()} {...props} />;
};

export default CListBtn;
