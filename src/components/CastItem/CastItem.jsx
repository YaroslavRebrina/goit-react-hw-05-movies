const CastItem = ({ img, name, role }) => {
  return (
    <>
      <img src={img} alt="artist" />
      <h3>{name}</h3>
      <p>{role}</p>
    </>
  );
};

export default CastItem;
