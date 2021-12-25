import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react';

import Friend from './pages/Friend/Friend';
import Friends from './pages/Friends/Friends';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

import { profiles } from './Profiles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background: "#0D6EFD",
    borderRadius: 0

  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    color: "white",
    fontWeight: 700
  },
}))

export default function App() {
  const classes = useStyles()
  const [loginned, setLoginned] = useState(false);
  const [profileId, setProfileId] = useState(-1);

  function Logout() {
    setLoginned(false)
    setProfileId(-1)
  }

  function checkCredentials(username, password) {
    const profile = profiles.filter((item) => item.name === username)[0]
    if (profile !== null) {
      if (password === profile.password) {
        setProfileId(profile.id)
        setLoginned(true)
        return true
      }
      return false
    }
  }

  return (
    <Router>
      <div className="App">
        <Card className={classes.root}>
          <Link className={classes.link} to="/home">Home</Link>
          <Link className={classes.link} to="/profile">Profile</Link>
          <Link className={classes.link} to="/friends">Friends</Link>
          {loginned ? <div className={classes.link} onClick={Logout}>Logout</div> : <Link className={classes.link} to="/login">{loginned ? "Logout" : "Login"}</Link>}
        </Card>
        <Routes>
          <Route path="/home" element={<Home loginned={loginned} />} />
          <Route path="/profile" element={
            <CheckForAuth authed={loginned}>
              <Profile profile={profiles[0]} />
            </CheckForAuth>
          } />
          <Route path="/friends" element={
            <CheckForAuth authed={loginned}>
              <FriendsLayout profileId={profileId} />
            </CheckForAuth>
          } >
            {profiles.filter((friend) => friend.id !== profileId).map(friend => {
              return <Route path={friend.name} key={friend.id} element={<Friend friend={profiles.filter((friendPage) => friendPage.name === friend.name)[0]} />} />
            })}
          </Route>

          <Route path="/login" element={<Login authed={loginned} setAuthed={setLoginned} check={checkCredentials} />} />
          <Route path="*" element={<Home loginned={loginned} />}></Route>
        </Routes>
      </div>
    </Router>
  );

  function CheckForAuth({ authed, children }) {
    return authed ?
      children :
      <Navigate to="/login" replace />
  }

  function FriendsLayout({profileId}) {
    return (
      <div>
        <div className="friends-layout">
          <Friends friends={profiles.filter((friend) => friend.id !== profileId)} />
          <Outlet />
        </div>
      </div>
    )
  }
}
