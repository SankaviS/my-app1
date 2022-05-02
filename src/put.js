import React, { useState } from "react";

const Put = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  const data = { name, email };
  const putHandler = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `https://6262556c327d3896e28506cd.mockapi.io/users/${props.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await result.json();
    // setToggle(!toggle);
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
      <form onSubmit={putHandler}>
        {toggle ? <label>Name</label> : null}
        {toggle ? (
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        ) : null}
        {toggle ? <label>Email</label> : null}
        {toggle ? (
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        ) : null}
        <button onClick={() => setToggle(!toggle)}>Edit</button>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default Put;
