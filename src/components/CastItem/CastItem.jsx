const CastItem = ({ img, name, role }) => {
  return (
    <li>
      <img src={img} alt="artist" />
      <h3>{name}</h3>
      <p>{role}</p>
    </li>
  );
};

export default CastItem;
