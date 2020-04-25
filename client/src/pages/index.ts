import { lazy } from "react"

const LoginPage = lazy(() => import("./login/LoginPage"))
const FeedPage = lazy(() => import("./feed/FeedPage"))

export const routes = [
    {
        exact: true,
        path: "/",
        component: LoginPage,
    },
    {
        exact: false,
        private: true,
        path: "/feed",
        component: FeedPage,
    },
]
