import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: theme.spacing(4),
    },
}))

const Home = ({ loginned }) => {
    const classes = useStyles()

    return (
        <h2 className={classes.root}>
            Welcome to the homepage!<br />
            {loginned ? "You have successfully authed in your account! You can now enter your pages" :
                "You are not authed! Please login into the system"}
        </h2>
    )
}

export default Home
