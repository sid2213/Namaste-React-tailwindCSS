import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  const { name, Location, Contact } = props;

  return (
    <>
      <div className="user-card">
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <h2>Name : {name}</h2>
        <h2>Location : {Location}</h2>
        <h2>Contact : {Contact}</h2>
      </div>
    </>
  );
};

export default User;
