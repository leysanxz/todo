import React, { useState } from "react";

import axios from "axios";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendRegister = (e) => {
    e.preventDefault();
  };

  const url = "https://5faa9383b5c645001602ac77.mockapi.io/username";
  const body = {
    userName: userName,
    email: email,
    password: password,
  };

  axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  }).then((res) => {
    alert("Id has been created", console.log(res));
  });

  return (
    <div>
      <h1>Register New Account</h1>

      <form onSubmit={sendRegister}>
        <table>
          <tr>
            <th>
              <label>User Name</label>
            </th>
            <tr>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </tr>
          </tr>
          <tr>
            <th>
              <label>Email</label>
            </th>
            <tr>
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </tr>
          </tr>
          <tr>
            <th>
              <label>Password</label>
            </th>
            <tr>
              <input
                type="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </tr>
          </tr>
        </table>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
