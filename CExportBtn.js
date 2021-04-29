import React from 'react';
import {connect} from 'formik';
import {Button} from 'react-bootstrap';
import curUrl from '@mxjs/cur-url';
import PropTypes from 'prop-types';

export default @connect
class CExportBtn extends React.Component {
  static propTypes = {
    formik: PropTypes.object,
  };

  exportCsv = () => {
    window.location = curUrl.index(Object.assign(this.props.formik.values, {
      page: 1,
      rows: 99999,
      _format: 'csv',
    }));
  };

  render() {
    return <Button variant="secondary" onClick={this.exportCsv}>导出</Button>;
  }
}
