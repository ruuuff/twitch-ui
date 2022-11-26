export default function ShowMore() {
  return (
    <div className="flex mb-[17px] mt-[13px]">
      <div className="relative flex-1">
        <div className="absolute top-1/2 w-full h-px bg-dash-bg"></div>
      </div>
      <button
        className="flex justify-center items-center mx-[10px] px-[10px] h-[30px]
        font-inter text-[13px] font-semibold text-purple hover:text-base-text-color
        hover:bg-showmore-hover-bg active:bg-showmore-active-bg rounded-[4px]"
      >
        Show more
        <svg
          className="ml-[5px]"
          fill="currentColor"
          width="20px"
          height="20px"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
          </g>
        </svg>
      </button>
      <div className="relative flex-1">
        <div className="absolute top-1/2 w-full h-px bg-dash-bg"></div>
      </div>
    </div>
  );
}
