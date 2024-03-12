const User = ({ img, name, hobbies, children }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h3>Hobbies {hobbies}</h3>
      {children}
    </section>
  );
};

export default User;
