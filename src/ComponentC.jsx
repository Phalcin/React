import { Data } from "./App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return <h2>My name is: ${name}</h2>;
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
