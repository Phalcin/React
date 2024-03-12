import User from "./User";

function App() {
  return (
    <>
      <User
        name="Emmanuel Mensah"
        img=""
        age={18}
        hobbies={["coding", "reading", "sleeping"]}
      >
        <p>Hello i am a child</p>
      </User>
    </>
  );
}

export default App;
