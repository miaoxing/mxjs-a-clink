import React from 'react';
import {connect} from 'formik';
import {Button} from 'react-bootstrap';
import curUrl from '@mxjs/cur-url';

@connect
export default class CExportBtn extends React.Component {
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
