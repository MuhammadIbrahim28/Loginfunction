import React from "react";
import Loggin from "./Loggin";

var isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn === true ? <h1>Hello</h1> : <Loggin />

        currentTime < 12 && <h1> why are you still working?</h1>
      }
    </div>
  );
}
export default App;
