import { Button, Input, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  h3: {
    fontSize: "30px",
  },
  p: {
    color: "grey",
    fontSize: "14px",
  }
}))


export default function Login({ check }) {
  const classes = useStyles()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onLogin() {
    if (check(username, password) === true) {
      navigate('/home');
    }
  }

  return (
    <div className={classes.root}>
      <form>
        <h3 className={classes.h3}>
          Login Page
        </h3>
        <label>
          User<br />
          <Input autoFocus type="text" onChange={(event => setUsername(event.target.value))} />
        </label>
        <p className={classes.p}>The correct username is: Mark</p>
        Password<br />
        <Input type="password" onChange={(event => setPassword(event.target.value))} />
        <p className={classes.p}>The correct password is: 12345</p>
        <Button
          onClick={onLogin}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </div>
  )
}
