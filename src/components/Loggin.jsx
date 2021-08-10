import React from "react";
import Input from "./Input";

function Loggin() {
  return (
    <from className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <button type="submit">Loggin</button>
    </from>
  );
}
export default Loggin;
