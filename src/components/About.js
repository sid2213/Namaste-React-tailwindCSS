import React from "react";
import UserClass from "./UserClass";
import User from "./User";

function About() {
  return (
    <div>
      <UserClass
        name={"Siddharth Jadav"}
        Location={"Dhrangadhra"}
        Contact={"smartsid2213@gmail.com"}
      ></UserClass>

      {/* <User
      name = {"Siddharth Jadav"}
      Location ={"Dhrangadhra"}
      Contact = {"smartsid2213@gmail.com"}
      > */}
      {/* </User> */}
    </div>
  );
}

export default About;
