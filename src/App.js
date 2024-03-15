const Move = () => {
  const moveHandler = () => {
    console.log("Yo what's up");
  };

  return (
    <>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magni modi
        voluptate non quas, dolore porro ex ratione quasi eum!
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Move />
    </>
  );
}

export default App;
