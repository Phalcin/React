const User = ({ img, name, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h3>Hobbies {hobbies}</h3>
    </section>
  );
};

export default User;
