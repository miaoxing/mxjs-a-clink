import {EditLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const CEditLink = ({id, ...props}) => (
  <EditLink permission={curUrl.edit('[id]')} to={curUrl.edit(id)} {...props} />
);

CEditLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CEditLink;
