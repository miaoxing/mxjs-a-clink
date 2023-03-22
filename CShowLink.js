import {ShowLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const getPermission = () => curUrl.show('[id]');

const CShowLink = ({id, ...props}) => (
  <ShowLink permission={getPermission()} href={curUrl.show(id)} {...props} />
);

CShowLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CShowLink.getPermission = getPermission;

export default CShowLink;
