export interface PropsCustomRouter {
    exact?: boolean
    path: string
    private?: boolean
    component: React.ComponentType<any>
}
