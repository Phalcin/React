import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    setMovie({
      ...movie,
      ratings: 7,
    });
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Ratings : {movie.ratings}</p>
      <button onClick={handleClick}>Change rating</button>
    </>
  );
}

export default App;
