import Image from "next/image";
import { useEffect, useState } from "react";
import favImg from "../public/images/favorite-star.svg";

const Favourite = ({ id }) => {
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    console.log(id);
    console.log(favourite);
  }, [favourite]);

  const handleFavourite = () => {
    setFavourite(!favourite);
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
            padding: 8px;
            width: 20%;
            border-radius: 8px 0 0 8px;
            background-color: var(--primary-bg-color);
          }

          .image {
            ${favourite ? `filter:invert(0)` : `filter: invert(1);`}
            filter: grayscale(100%);
        `}
      </style>
    </>
  );
};

export default Favourite;
