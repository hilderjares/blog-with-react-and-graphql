import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useStyles } from "./styles"
import { useMutation } from "@apollo/react-hooks"
import UserLogin from "../../graphql/mutations/UserLogin"
import Typography from "@material-ui/core/Typography"
import { setCredentials } from "../../services/auth"
import { useHistory } from "react-router-dom"

const Login: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [login] = useMutation(UserLogin)
    const [error, setError] = useState<boolean>(false)

    const handleLogin = () => {
        login({
            variables: {
                email: email,
                password: password,
            },
        })
            .then((result) => {
                setCredentials(result?.data?.login?.token)
                history.push("/feed")
            })
            .catch(() => setError(true))
    }

    return (
        <form className={classes.form}>
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                    setEmail(event.target.value)
                }}
            />
            <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                    setPassword(event?.target.value)
                }}
            />
            <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => handleLogin()}
            >
                Go!
            </Button>

            {error && (
                <Typography color="error" align={"center"}>
                    Something went wrong :(
                </Typography>
            )}
        </form>
    )
}

export default Login
