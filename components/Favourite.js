import Image from "next/image";
import { useState } from "react";
import favImg from "../public/images/favourite-svg.svg";

const Favourite = ({ id }) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    setFavourite(!favourite);
    console.log(id);
    console.log(favourite);
  };

  return (
    <>
      <button onClick={handleFavourite}>
        <div className="image">
          <Image src={favImg} alt="favourite-ico" width={50} height={50} />
        </div>
      </button>
      <style jsx>
        {`
          button {
            background-color: rgb(94, 36, 89);
            padding: 8px;
            width: 20%;
            border-radius: 8px 0 0 8px;
          }

          .image {
            filter: invert(1);
          }
        `}
      </style>
    </>
  );
};

export default Favourite;
