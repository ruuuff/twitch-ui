// import { useCallback } from "react";

function CarouselItem({
  channel,
  index,
  centralItem,
  updateCentralItem,
  showItems,
}) {
  const { user, game, viewers, tags, avatar } = channel;
  const isCentral = index === centralItem;

  function getStyle(index) {
    // center
    if (centralItem === index) {
      return "w-[750px] h-[300px] left-[50%] z-[8]";
    }

    const itemIndex = showItems.indexOf(index);

    // 2
    if (itemIndex === 2 || itemIndex === showItems.length - 3) {
      const baseStyle = "w-[637px] h-[255px] z-[7]";
      return baseStyle + (itemIndex === 2 ? " left-[40%]" : " left-[60%]");
    }

    // 3
    if (itemIndex === 1 || itemIndex === showItems.length - 2) {
      const baseStyle = "w-[525px] h-[210px] z-[6]";
      return baseStyle + (itemIndex === 1 ? " left-[30%]" : " left-[70%]");
    }

    // hidden
    if (itemIndex === 0 || itemIndex === showItems.length - 1) {
      const baseStyle =
        "w-[400px] h-[169px] z-[5] opacity-0 pointer-events-none";
      return baseStyle + (itemIndex === 0 ? " left-[20%]" : " left-[80%]");
    }

    return "h-[0px] w-[0px] left-[50%] opacity-0";
  }
  return (
    <div
      key={index}
      className={`flex absolute top-[50%] shadow-lg transform translate-x-[-50%] 
      translate-y-[-50%] ${!isCentral && "hover:scale-[1.03]"} ${getStyle(
        index
      )}`}
      style={{
        transition:
          "left .6s, width .6s, height .6s, opacity .6s, transform .2s",
      }}
      onClick={updateCentralItem}
    >
      <div
        className={`relative h-full bg-black ${
          isCentral
            ? "w-[530px] transition-[width] duration-[0s] delay-[800ms]"
            : "w-full"
        }`}
      >
        {isCentral && (
          <div
            className="absolute top-[10px] left-[10px] bg-color-fill-live
            font-inter text-[13px] rounded-[4px] px-[5px] font-semibold
            text-[#fff]"
          >
            LIVE
          </div>
        )}
      </div>

      {isCentral && (
        <div
          className={`flex-1 overflow-hidden bg-carousel-item-bg ${
            isCentral ? "w-auto" : "w-0"
          }`}
        >
          <div className="w-full h-full p-[10px] space-y-[10px]">
            <div className="flex">
              <div>
                <img
                  className="w-[50px] h-50px rounded-full"
                  src={avatar}
                  alt={user}
                />
              </div>
              <div className="ml-[10px] text-[13px]">
                <a
                  href="/#"
                  className="block text-purple font-inter font-semibold hover:underline"
                >
                  {user}
                </a>
                <a
                  href="/#"
                  className="block text-purple font-inter hover:underline"
                >
                  {game}
                </a>
                <span className="block font-inter text-carousel-txt">
                  {viewers >= 1000
                    ? `${(viewers / 1000).toFixed(1)}K`
                    : viewers}{" "}
                  viewers
                </span>
              </div>
            </div>

            <div className="flex">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href="/#"
                  className="inline-block font-inter font-semibold text-[12px]
                        text-tag-txt bg-tag-bg px-2 rounded-full"
                >
                  {tag}
                </a>
              ))}
            </div>

            <p className="font-inter text-[13px] text-carousel-txt">
              {user} is live! Come hang out in chat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselItem;
