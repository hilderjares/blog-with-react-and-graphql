import React, { Suspense } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { routes } from "../../pages"
import { PropsCustomRouter } from "./models"
import { isAuthenticated } from "../../services/auth"

const PublicRouter = ({
    component: Component,
    ...otherProps
}: PropsCustomRouter) => (
    <Route render={(otherProps) => <Component {...otherProps} />} />
)

const PrivateRouter = ({
    component: Component,
    ...otherProps
}: PropsCustomRouter) =>
    isAuthenticated() ? <Component {...otherProps} /> : <Redirect to="/" />

const Routes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route: PropsCustomRouter, index: number) =>
                        route.private ? (
                            <PrivateRouter
                                component={route.component}
                                path={route.path}
                                exact={route.exact}
                                key={index}
                            />
                        ) : (
                            <PublicRouter
                                component={route.component}
                                path={route.path}
                                exact={route.exact}
                                key={index}
                            />
                        )
                    )}
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes
