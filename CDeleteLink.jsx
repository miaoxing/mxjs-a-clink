import {DeleteLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const CDeleteLink = ({id, ...props}) => {
  return (
    <DeleteLink permission={curUrl.to('[id]/delete')} href={curUrl.apiShow(id)} {...props} />
  );
};

CDeleteLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CDeleteLink;
