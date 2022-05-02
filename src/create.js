import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const data = { name, email };
  console.log(data);
  const createHandler = async (e) => {
    e.preventDefault();
    const result = await fetch(
      "https://6262556c327d3896e28506cd.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await result.json();

    if (
      res.name !== null &&
      res.name !== "" &&
      res.email !== null &&
      res.email !== ""
    ) {
      setName("");
      setEmail("");
      setMessage("Added");
    } else {
      setMessage("Failed");
    }
  };

  return (
    <div>
      <form onSubmit={createHandler}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <button type="submit">Create</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default Create;
