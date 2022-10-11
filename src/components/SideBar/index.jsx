import { useState } from "react";
import { followedChannels, recommendedChannels } from "./data";
import NavButton from "../NavBar/NavButton";
import Channel from "./Channel";

function SideBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div
      className={`h-full bg-sidebar-bg overflow-y-scroll scrollbar ${
        openSideBar ? "w-[240px]" : "w-[50px]"
      }`}
    >
      <div className="text-base-txt relative">
        <div
          className={`flex justify-center ${
            openSideBar ? "absolute right-[10px] top-[10px] z-10" : "py-[10px]"
          }`}
        >
          {openSideBar ? (
            <NavButton onClick={() => setOpenSideBar(false)} sralt="Collapse">
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
                  <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
                </g>
              </svg>
            </NavButton>
          ) : (
            <NavButton onClick={() => setOpenSideBar(true)} sralt="Expand">
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
                  <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
                </g>
              </svg>
            </NavButton>
          )}
        </div>
      </div>

      <div className="followed channels flex flex-col">
        {openSideBar && (
          <div className="text-base-txt py-[10px]">
            <p className="font-inter font-semibold uppercase text-[13px] px-[10px] pt-[3px]">
              Followed Channels
            </p>
          </div>
        )}

        {/* Heart SVG */}
        {!openSideBar && (
          <div className="py-[10px] text-alt-txt-color">
            <svg
              className="mx-auto"
              type="color-fill-current"
              width="20px"
              height="20px"
              fill="currentColor"
              title="Followed Channels"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
            >
              <g>
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                ></path>
              </g>
            </svg>
          </div>
        )}

        {followedChannels.map((channel, index) => (
          <Channel key={index} channel={channel} expanded={openSideBar} />
        ))}

        {openSideBar && (
          <div className="py-[5px] px-[10px]">
            <button
              className="inline-block h-[22.3px] self-start font-inter text-[12px] 
                font-normal text-purple hover:underline"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <div className="recommended channels">
        {/* Live SVG */}
        {!openSideBar && (
          <div className="py-[10px] text-alt-txt-color">
            <svg
              type="color-fill-current"
              className="mx-auto"
              width="20px"
              height="20px"
              fill="currentColor"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
            >
              <g>
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z"
                ></path>
              </g>
            </svg>
          </div>
        )}

        {recommendedChannels.map((channel, index) => (
          <Channel key={index} channel={channel} expanded={openSideBar} />
        ))}

        {openSideBar && (
          <div className="py-[5px] px-[10px]">
            <button
              className="inline-block h-[22.3px] self-start font-inter text-[12px] 
                font-normal text-purple hover:underline"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
