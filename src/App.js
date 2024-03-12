

function App() {
const userInfo = [
  {
    username : "Emmanuel",
    email : 'test@gmail.com',
    location : 'Ghana'
  },
  {
    username : 'John',
    email : 'test@gmail.com',
    location : 'UK',
  },
  {
    username : 'Isaac',
    email : 'test@gmail.com',
    location : 'America'
  }
]
  return (
<>
 {userInfo.map(user => (
  <ul key={Math.random() * 10}>
    <li>{user.username}</li>
    <li>{user.email}</li>
    <li>{user.location}</li>
  </ul>
 ))}
</>
  );
  
} 

export default App  