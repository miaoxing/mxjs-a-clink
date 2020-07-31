import React from 'react';
import {EditLink} from "@mxjs/a-button";
import curUrl from "@mxjs/cur-url";

const CEditLink = ({id, ...props}) => <EditLink href={curUrl.edit(id)} {...props} />;

export default CEditLink;
