import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { ROUTE_ROOT } from 'common/variables';

const Home = loadable(() => import('pages/main'));

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTE_ROOT.HOME} component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
