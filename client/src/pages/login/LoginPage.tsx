import React from "react"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Divider from "@material-ui/core/Divider"
import CardContent from "@material-ui/core/CardContent"
import LockIcon from "@material-ui/icons/Lock"
import Login from "../../components/Login/Login"
import Icon from "@material-ui/core/Icon"
import { Link } from "react-router-dom"

const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Card>
                <CardHeader
                    avatar={<LockIcon color={"secondary"} />}
                    title={"Login"}
                    action={
                        <Link to="/singup">
                            <Icon fontSize="large" color={"secondary"}>
                                account_circle
                            </Icon>
                        </Link>
                    }
                />
                <Divider />
                <CardContent>
                    <Login />
                </CardContent>
            </Card>
        </Container>
    )
}

export default LoginPage
