import Image from "next/image";

const Character = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.status}</p>
      <p>{data.species}</p>
      <p>{data.gender}</p>
      <Image width={300} height={100} src={data.image} alt={data.name} />
    </div>
  );
};

export default Character;
