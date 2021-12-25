import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: theme.spacing(4),
    },
}))

export default function Friends({ friends }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h2>
                Friends page
            </h2>
            {friends.map((friend) => {
                return (
                    <li><Link to={friend.name} key={friend.id}>{friend.name}</Link></li>
                )})
            }
        </div>
    )
}
