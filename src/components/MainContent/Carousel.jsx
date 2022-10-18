import { useCallback, useEffect, useState } from "react";
import CarouselBtn from "./CarouselBtn";

const data = [
  { name: "alanzoka", game: "Scorn" },
  { name: "frttt", game: "VALORANT" },
  { name: "laribasgal", game: "Overwatch 2" },
  { name: "Baiano", game: "League of Legends" },
  { name: "Philza", game: "Just Chatting" },
  { name: "YoDa", game: "League of Legends" },
  { name: "Coreano", game: "Overwatch 2" },
  { name: "TFToddy", game: "Teamfight Tactics" },
  { name: "Felps", game: "Music" },
  { name: "Bagi", game: "Just Chatting" },
];

function Carousel() {
  const [showItem, setShowItem] = useState(0);
  const [showItems, setShowItems] = useState([]);

  function updateShowCarouselItem(value) {
    setShowItem((current) => {
      if (current + value < 0) return data.length - 1;
      else if (current + value >= data.length) return 0;
      return current + value;
    });
  }

  const getStyle = useCallback(
    (index) => {
      // center
      if (showItem === index) {
        return "w-[530px] h-[300px] left-[50%] z-[8]";
      }

      const indexOfItem = showItems.indexOf(index);

      // hidden
      if (indexOfItem === 0 || indexOfItem === showItems.length - 1) {
        const baseStyle = "w-[300px] h-[169px] z-[5] opacity-0";
        return baseStyle + (indexOfItem === 0 ? " left-[20%]" : " left-[80%]");
      }

      // 3
      if (indexOfItem === 1 || indexOfItem === showItems.length - 2) {
        const baseStyle = "w-[371px] h-[210px] z-[6]";
        return baseStyle + (indexOfItem === 1 ? " left-[28%]" : " left-[72%]");
      }

      // 2
      if (indexOfItem === 2 || indexOfItem === showItems.length - 3) {
        const baseStyle = "w-[450px] h-[255px] z-[7]";
        return baseStyle + (indexOfItem === 2 ? " left-[38%]" : " left-[62%]");
      }

      return "h-[0px] w-[0px] left-[50%] opacity-0";
    },
    [showItem, showItems]
  );

  useEffect(() => {
    const refDataArray = data;
    const array = [];
    const amounth = 3;
    let negative = 0;
    let positive = 0;

    for (let i = 1; i <= amounth; i++) {
      if (refDataArray[showItem - i] !== undefined) {
        array.unshift(showItem - i);
      } else {
        array.unshift(refDataArray.length - (negative + 1));
        negative++;
      }
    }

    array.push(showItem);

    for (let i = 1; i <= amounth; i++) {
      if (showItem + i <= refDataArray.length - 1) {
        array.push(showItem + i);
      } else {
        array.push(positive);
        positive++;
      }
    }

    setShowItems(array);
  }, [showItem]);
  return (
    <div className="h-[300px] w-full relative">
      <CarouselBtn left onClick={() => updateShowCarouselItem(-1)}>
        <svg
          width="24px"
          height="24px"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path d="M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z"></path>
          </g>
        </svg>
      </CarouselBtn>

      {data.map(({ name, game }, index) => {
        return (
          <div
            key={index}
            className={`transform translate-x-[-50%] translate-y-[-50%]
            transition-[left,width,height,opacity] ease-linear duration-500
            absolute top-[50%] shadow-md text-base-txt 
            ${getStyle(index)}`}
          >
            <div
              className={`h-full w-full bg-carousel-item-bg transition-[transform]
              ${
                index !== showItem &&
                "transform duration-300 hover:scale-[1.04]"
              }`}
            >
              {name}
              <br />
              {game}
            </div>
          </div>
        );
      })}

      <CarouselBtn right onClick={() => updateShowCarouselItem(1)}>
        <svg
          width="24px"
          height="24px"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
          </g>
        </svg>
      </CarouselBtn>
    </div>
  );
}

export default Carousel;
