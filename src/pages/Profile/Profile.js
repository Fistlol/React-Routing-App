import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: theme.spacing(4),
    },
    img: {
        height: "200px",
    }
}))

export default function Profile({ profile }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h2>
                Profile page
            </h2>
            <div>
                <div>
                    <img className={classes.img} src={profile.photo} />
                    <h3>{profile.name} {profile.surname}</h3>
                    <p>{profile.age} years old...</p>
                </div>
            </div>
        </div>
    )
}
