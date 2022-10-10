const Character = ({ data }) => (
  <div>
    <h1>{data.name}</h1>
    <span className="row">Role: {data.role}</span>
    <span className="row">Level: {data.level}</span>
  </div>
);

export default Character;
