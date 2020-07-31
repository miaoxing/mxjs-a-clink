import React from 'react';
import {DeleteLink} from "@mxjs/a-button";
import curUrl from "@mxjs/cur-url";

const CDeleteLink = ({id, ...props}) => <DeleteLink href={curUrl.apiDestroy(id)} {...props} />;

export default CDeleteLink;
