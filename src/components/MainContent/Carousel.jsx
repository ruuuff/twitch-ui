import { useEffect, useState } from "react";
import CarouselBtn from "./CarouselBtn";
const data = ["1", "2", "3", "4", "5", "6", "7", "8"];

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

  useEffect(() => {
    const array = [];
    array.push(showItem);

    if (data[showItem - 1] === undefined) {
      array.unshift(data.length - 1);
    } else {
      array.unshift(showItem - 1);
    }

    if (data[showItem - 2] === undefined) {
      if (array.includes(data.length - 1)) {
        array.unshift(data.length - 2);
      } else {
        array.unshift(data.length - 1);
      }
    } else {
      array.unshift(showItem - 2);
    }

    if (data[showItem + 1] === undefined) {
      array.push(0);
    } else {
      array.push(showItem + 1);
    }

    if (data[showItem + 2] === undefined) {
      if (array.includes(0)) {
        array.push(1);
      } else {
        array.push(0);
      }
    } else {
      array.push(showItem + 2);
    }

    setShowItems(array);
  }, [showItem]);

  function getStyle(id) {
    if (showItem === id) {
      return "w-[530px] h-[300px] bg-slate-500 left-[50%]";
    }

    return "hidden";
  }

  console.log(showItems);

  return (
    <div className="h-[300px] w-full relative">
      <CarouselBtn left onClick={() => updateShowCarouselItem(-1)}>
        <svg
          width="20px"
          height="20px"
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

      {data.map((value, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-center absolute top-[50%] 
            transform translate-x-[-50%] translate-y-[-50%] ${getStyle(index)}`}
          >
            {value}
          </div>
        );
      })}

      <CarouselBtn right onClick={() => updateShowCarouselItem(1)}>
        <svg
          width="20px"
          height="20px"
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
