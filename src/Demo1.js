import React from "react";
import "./demo1.css";
import Put from "./put";
const Demo1 = (props) => {
  const deleteHandler = async () => {
    const result = await fetch(
      `https://6262556c327d3896e28506cd.mockapi.io/users/${props.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await result.json();
    console.log(data);
  };
  return (
    <div className="list">
      <span>{props.name}</span>
      <span>{props.username}</span>
      <span>{props.email}</span>

      <span>
        <Put id={props.id} />
        <button onClick={deleteHandler}>Delete</button>
      </span>
    </div>
  );
};

export default Demo1;
