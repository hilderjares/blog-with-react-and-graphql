import { makeStyles } from "@material-ui/core/styles"
import { getRandomInt } from "../../../utils"

const avatarColor = ["blue", "red", "green", "orange"]

const getAvatarColor = () => avatarColor[getRandomInt(0, 4)]

export const useStyles = makeStyles({
    table: {
        marginTop: 30,
        width: 650,
        margin: "0 auto",
    },
    color: {
        background: getAvatarColor(),
    },
})
