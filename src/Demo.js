import React from "react";
import Demo1 from "./Demo1";

const Demo = (props) => {
  return (
    <div>
      {props.data.map((data) => {
        return (
          <Demo1
            id={data.id}
            name={data.name}
            email={data.email}
            address={data.address}
            username={data.username}
          />
        );
      })}
    </div>
  );
};

export default Demo;
