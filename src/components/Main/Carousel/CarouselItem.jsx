import { getViewersFormatted } from "../../../utils";
import LiveTag from "../../LiveTag";
import Marker from "../../Marker";

function CarouselItem({
  index,
  channel,
  showItems,
  centralItem,
  firstInteraction,
  manualUpdateCenterItem,
}) {
  const { user, game, viewers, tags, avatar } = channel;
  const isCentral = index === centralItem;

  function getStyle() {
    // center
    if (isCentral) return "w-[750px] h-[300px] left-[50%] z-[8]";
    const itemIndex = showItems.indexOf(index);

    // 2
    if (itemIndex === 2 || itemIndex === showItems.length - 3) {
      return (
        "w-[637px] h-[255px] z-[7] " +
        (itemIndex === 2 ? "left-[40%]" : "left-[60%]")
      );
    }

    // 3
    if (itemIndex === 1 || itemIndex === showItems.length - 2) {
      return (
        "w-[525px] h-[210px] z-[6] " +
        (itemIndex === 1 ? "left-[30%]" : "left-[70%]")
      );
    }

    // hidden
    if (itemIndex === 0 || itemIndex === showItems.length - 1) {
      return (
        "w-[400px] h-[169px] z-[5] opacity-0 pointer-events-none " +
        (itemIndex === 0 ? "left-[20%]" : "left-[80%]")
      );
    }

    return "h-[0px] w-[0px] left-[50%] opacity-0";
  }

  return (
    <div
      className={`absolute top-[50%] shadow-lg transform translate-x-[-50%] 
      translate-y-[-50%] ${!isCentral && "hover:scale-[1.03]"} ${getStyle()}`}
      style={{
        transition:
          "left .6s, width .6s, height .6s, opacity .6s, transform .2s",
      }}
      onClick={manualUpdateCenterItem}
    >
      <div
        className={`relative h-full bg-black cursor-pointer ${
          isCentral
            ? "w-[530px] transition-[width] duration-[0s] delay-1000"
            : "w-full"
        }`}
      >
        {isCentral && <LiveTag />}
      </div>

      {isCentral && (
        <div
          className={`absolute right-0 top-0 bottom-0 w-[220px]
          bg-carousel-item-bg ${
            firstInteraction && "opacity-0 animate-fadeIn"
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
                <span className="block font-inter text-carousel-text-color">
                  {getViewersFormatted(viewers)} viewers
                </span>
              </div>
            </div>

            <div className="flex">
              {tags.map((tag, index) => (
                <Marker key={index} tag={tag} />
              ))}
            </div>

            <p className="font-inter text-[13px] text-carousel-text-color">
              {user} is live! Come hang out in chat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselItem;
