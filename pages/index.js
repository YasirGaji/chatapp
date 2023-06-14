import React, { useContext } from "react";

import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export default function Auth() {
  const {
    setUsername,
    setSecret,
  } = useContext(Context)

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
