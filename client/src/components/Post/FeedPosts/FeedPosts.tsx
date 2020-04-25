import React, { Fragment } from "react"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Divider from "@material-ui/core/Divider"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import VisibilityIcon from "@material-ui/icons/Visibility"
import Icon from "@material-ui/core/Icon"

import { useQuery } from "@apollo/react-hooks"
import GetAllPublishedPosts from "../../../graphql/queries/GetAllPublishedPosts"
import { Post } from "../models"
import { useStyles } from "./styles"

const FeedPosts: React.FC = () => {
    const { data, loading, error } = useQuery(GetAllPublishedPosts)
    const classes = useStyles()

    return (
        <Fragment>
            {loading && <h3> loading... </h3>}
            {error && <h3> something went wrong... </h3>}

            {data &&
                data?.feed.map((post: Post) => (
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar className={classes.color}>
                                    {post?.author?.name[0]?.toUpperCase()}
                                </Avatar>
                            }
                            title={post?.author?.name}
                            action={
                                <VisibilityIcon
                                    fontSize={"large"}
                                    color={"secondary"}
                                />
                            }
                        />
                        <Divider />
                        <CardContent>{post.title}</CardContent>
                        <CardActions>{post.category.name}</CardActions>
                    </Card>
                ))}
        </Fragment>
    )
}

export default FeedPosts
