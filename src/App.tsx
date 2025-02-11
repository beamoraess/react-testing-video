import { useState } from "react";
import Button from "./Button";


function App() {
  const [ message, setMessage ] = useState("Let's learn about testing library");

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button disabled={false} children={undefined} onClick={function (): void {
        throw new Error("Function not implemented.");
      } }></Button>
    </div>
  );
}

export default App;
