import React, { Fragment } from "react"
import NavBar from "../../components/NavBar/NavBar"
import FeedPosts from "../../components/Post/FeedPosts"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"

const FeedPage: React.FC = () => {
    return (
        <Fragment>
            <NavBar />
            <Toolbar />
            <Container>
                <Box my={2}>
                    <FeedPosts />
                </Box>
            </Container>

            <Container></Container>
        </Fragment>
    )
}

export default FeedPage
