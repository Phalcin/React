import { Data } from "./App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return <h3>My nam is: ${name}</h3>;
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
