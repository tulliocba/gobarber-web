import React from 'react';
import { Route as RouteRN, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

import DefaultLayout from '~/pages/_layout/default';
import AuthenticatedtLayout from '~/pages/_layout/auth';

export default function Route({ component: Component, isPrivate, ...rest }) {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/" />;
    }

    const Layout = signed ? DefaultLayout : AuthenticatedtLayout;

    return (
        <RouteRN
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

Route.propTypes = {
    isPrivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
        .isRequired,
};

Route.defaultProps = {
    isPrivate: false,
};
