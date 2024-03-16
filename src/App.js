import { createContext } from "react";
import ComponentC from "./ComponentA";

//2. Creating instance of (createContent)
export const Data = createContext();

function App() {
  const name = "Emmanuel Hexer";
  return (
    //3. Wrap our component into Provide component
    <>
      <Data.Provider value={name}>
        <ComponentC />
      </Data.Provider>
    </>
  );
}

export default App;
