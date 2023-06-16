import React, { useContext } from "react";

import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export default function Auth() {
  const {
    username,
    setUsername,
    secret,
    setSecret,
  } = useContext(Context);

  function onSubmit(e) {
    e.preventDefault()


    if (username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io',
      {username, secret},
      {headers: {"private-key": "d9bc2727-c43b-4a56-8d90-cb2f6c6c4bb9"}}
    )
    .then(r => Router.push('/chats'))
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => e.preventDefault()}>
          <div className="auth-title">Chat App</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Signup
          </button>
        </form>
      </div>
    </div>
  )
}
