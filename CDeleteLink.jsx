import {DeleteLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const getPermission = () => curUrl.to('[id]/delete');

const CDeleteLink = ({id, ...props}) => {
  return (
    <DeleteLink permission={getPermission()} href={curUrl.apiShow(id)} {...props} />
  );
};

CDeleteLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CDeleteLink.getPermission = getPermission;

export default CDeleteLink;
