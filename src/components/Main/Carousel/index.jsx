import { useCallback, useEffect, useMemo, useState } from "react";
import { followedChannels } from "../../../data";
import CarouselBtn from "./CarouselBtn";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const data = useMemo(() => followedChannels.slice(0, 10), []);
  const [hadInteraction, setHadInteraction] = useState(false);
  const [centralItem, setCentralItem] = useState(0);
  const [showItems, setShowItems] = useState([]);

  const updateSideItems = useCallback(() => {
    const array = [];
    const amount = 3;
    let negative = 0;
    let positive = 0;

    for (let i = 1; i <= amount; i++) {
      if (centralItem - i >= 0) {
        array.unshift(centralItem - i);
      } else {
        array.unshift(data.length - (negative + 1));
        negative++;
      }
    }

    array.push(centralItem);

    for (let i = 1; i <= amount; i++) {
      if (centralItem + i <= data.length - 1) {
        array.push(centralItem + i);
      } else {
        array.push(positive);
        positive++;
      }
    }

    setShowItems(array);
  }, [data, centralItem]);

  const updateCentralItem = useCallback(
    (value, manualValue = false) => {
      if (!hadInteraction) setHadInteraction(true);
      if (manualValue && centralItem !== value) return setCentralItem(value);

      setCentralItem((current) => {
        if (current + value < 0) return data.length - 1;
        else if (current + value >= data.length) return 0;
        return current + value;
      });

      updateSideItems();
    },
    [centralItem, updateSideItems, data.length, hadInteraction]
  );

  useEffect(() => updateSideItems(), [updateSideItems]);

  return (
    <div className="h-[300px] w-full relative">
      <CarouselBtn left onClick={() => updateCentralItem(-1)}>
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

      {showItems.length ? (
        data.map((channel, index) => (
          <CarouselItem
            key={index}
            index={index}
            channel={channel}
            showItems={showItems}
            centralItem={centralItem}
            hadInteraction={hadInteraction}
            updateCentralItem={() => updateCentralItem(index, true)}
          />
        ))
      ) : (
        <div
          className="flex w-[750px] h-[300px] absolute top-[50%] left-[50%] 
          shadow-lg transform translate-x-[-50%] translate-y-[-50%] bg-gray-200"
        ></div>
      )}

      <CarouselBtn right onClick={() => updateCentralItem(1)}>
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
