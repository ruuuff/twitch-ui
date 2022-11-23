import HoverEffect from "../../HoverEffect";
import LiveTag from "../../LiveTag";
import Marker from "../../Marker";

export default function Channel({ channel }) {
  const { user, game, viewers, title, tags, avatar, color } = channel;

  return (
    <div>
      <HoverEffect color={color} pb="56.36%">
        <div className="bg-black dark:bg-[#222] w-full h-full">
          <LiveTag />

          <span
            className="absolute bottom-[10px] left-[10px] font-inter px-1
            text-white text-[13px] bg-livechannel-viewer-count-bg rounded-[4px]"
          >
            {viewers >= 1000 ? `${(viewers / 1000).toFixed(1)}K` : viewers}{" "}
            viewers
          </span>
        </div>
      </HoverEffect>

      <div className="flex mt-[9px]">
        <div className="mr-[10px]">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={avatar}
            alt={user}
          />
        </div>

        <div className="flex-1 font-inter">
          <div className="mb-[2px]">
            <a
              className="block text-[14px] font-semibold text-livechannel-title-color
              hover:text-purple mt-[-1px]"
              href="/#"
            >
              {title || "title not provided"}
            </a>
          </div>
          <div>
            <a
              className="block text-[13px] text-livechannel-subtitle-color"
              href="/#"
            >
              {user}
            </a>
          </div>
          <div className="leading-[13px] mt-[2px]">
            <a
              className="inline-block text-[13px] text-livechannel-subtitle-color 
              hover:text-purple"
              href="/#"
            >
              {game}
            </a>
          </div>
          <div className="flex mt-[10px]">
            {tags.map((tag, index) => (
              <Marker key={index} tag={tag} large />
            ))}
          </div>
        </div>

        <div>
          <button
            className="flex items-center justify-center w-[24px] h-[24px]
            rounded-[2px] hover:bg-tag-hover-bg active:bg-tag-active-bg"
          >
            <svg
              width="16px"
              height="16px"
              className="fill-base-text-color"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
            >
              <g>
                <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
