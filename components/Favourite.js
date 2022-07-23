import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import favImg from "../public/images/favorite-star.svg";
import { FavoriteContext } from "../contexts/favorite";

const Favourite = ({ id, data }) => {
  const [favourite, setFavourite] = useState(false);

  const { addFavorite } = useContext(FavoriteContext);

  useEffect(() => {}, []);

  const handleFavourite = () => {
    console.log(id);
    setFavourite(!favourite);
    addFavorite({ data });
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
