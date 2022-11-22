export default function Channel({ channel }) {
  const {
    user,
    game,
    viewers,
    title,
    tags,
    avatar,
    color = "#9147ff",
  } = channel;

  return (
    <div>
      <div className="relative w-full pb-[56.36%] cursor-pointer group ">
        <div
          className="absolute bottom-0 h-[6px] w-full z-[1]"
          style={{ background: color }}
        ></div>
        <div
          className="absolute left-0 h-full w-[6px] z-[1]"
          style={{ background: color }}
        ></div>
        <div
          className="absolute top-0 left-0 h-[6px] w-[6.5px] z-[1]
          group-hover:top-[-6px] transition-[top] duration-150"
          style={{
            background: color,
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 h-[6px] w-[6px] z-[1]
          group-hover:right-[-6px] transition-[right] duration-150"
          style={{
            background: color,
            clipPath: "polygon(100% 0, 0 100%, 0 0)",
          }}
        ></div>

        <div
          className="absolute inset-0 z-[2] bg-[#000] dark:bg-[#222]
          transform group-hover:translate-x-[6px] group-hover:translate-y-[-6px]
          transition-[transform] duration-150"
        >
          <span
            className="absolute top-[10px] left-[10px] bg-live-bg-color
            font-inter text-[13px] rounded-[4px] px-[5px] font-semibold
            text-white"
          >
            LIVE
          </span>

          <span
            className="absolute bottom-[10px] left-[10px] font-inter px-1
            text-white text-[13px] bg-livechannel-viewer-count-bg rounded-[4px]"
          >
            {viewers >= 1000 ? `${(viewers / 1000).toFixed(1)}K` : viewers}{" "}
            viewers
          </span>
        </div>
      </div>

      <div className="flex mt-[8px]">
        <div className="flex flex-1">
          <div className="mr-[10px]">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={avatar}
              alt={user}
            />
          </div>

          <div className="flex flex-1 flex-col font-inter">
            <div className="mb-[1px]">
              <a
                className="block text-[14px] font-semibold text-livechannel-title-color
              hover:text-purple mt-[-1px] mb-[1px]"
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
                <a
                  key={index}
                  href="/#"
                  className="inline-block font-semibold text-[12px] rounded-full
                bg-livechannel-tag-bg text-tag-text-color px-[10px] py-[1px]
                hover:bg-tag-hover-bg"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <button
            className="flex items-center justify-center w-[24px] h-[24px]
            hover:bg-tag-hover-bg active:bg-tag-active-bg rounded-[2px]"
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
