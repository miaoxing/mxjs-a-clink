import React from 'react';
import {NewBtn} from '@mxjs/a-button';
import curUrl from "@mxjs/cur-url";

export default (props) => (
  <NewBtn href={curUrl.new()} {...props}/>
);
