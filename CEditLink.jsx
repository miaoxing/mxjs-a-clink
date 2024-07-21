import {EditLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const getPermission = () => curUrl.edit('[id]');

const CEditLink = ({id, ...props}) => (
  <EditLink permission={getPermission()} to={curUrl.edit(id)} {...props} />
);

CEditLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CEditLink.getPermission = getPermission;

export default CEditLink;
