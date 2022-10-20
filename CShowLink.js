import {ShowLink} from '@mxjs/a-button';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

const CShowLink = ({id, ...props}) => <ShowLink href={curUrl.show(id)} {...props} />;

CShowLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CShowLink;
