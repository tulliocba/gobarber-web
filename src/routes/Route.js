import React from 'react';
import { Route as RouteRC, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

export default function Route({ component: Component, isPrivate, ...rest }) {
    const signed = true;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/" />;
    }

    return <RouteRC {...rest} component={Component} />;
}

Route.propTypes = {
    isPrivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
        .isRequired,
};

Route.defaultProps = {
    isPrivate: false,
};
