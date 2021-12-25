import { makeStyles } from '@material-ui/core'
import React from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: theme.spacing(4),
    },
    img: {
        height: "200px",
    }
}))

export default function Friend({ friend }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.img} src={friend.photo} />
            <div>{friend.name} {friend.surname}</div>
            <div>Country: {friend.country}</div>
            <div>Age: {friend.age}</div>
        </div>
    )
}
