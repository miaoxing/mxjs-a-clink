import {ListBtn} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';

const CListBtn = (props) => {
  return <ListBtn href={curUrl.index()} {...props} />;
};

export default CListBtn;
