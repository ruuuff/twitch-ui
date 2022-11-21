export default function Channel({ channel }) {
  const { user, game, viewers, title, tags, avatar, rgb = "purple" } = channel;

  return (
    <div>
      <div className="relative w-full pb-[56.36%] bg-[#000] dark:bg-[#222] cursor-pointer">
        <div className="absolute inset-0">
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
              hover:text-purple"
              href="/#"
            >
              {title || "Title not provided"}
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
                bg-livechannel-tag-bg text-tag-text-color px-[10px] py-[1px]"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
