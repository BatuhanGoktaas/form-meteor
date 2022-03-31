import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = (e: any) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  return (
    <div className="login-bg">
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={submit} className="login-form">
                  <div className="mb-4">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid">
                    <button className="btn text-light bg-primary" type="submit">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
