import { useState } from "react";
import data from "./data";
import NavButton from "../NavBar/NavButton";
import Channel from "./Channel";

function SideBar() {
  const [expandedSideBar, setExpandedSideBar] = useState(false);

  return (
    <div
      className={`h-full bg-sidebar-bg ${
        !expandedSideBar ? "w-[50px]" : "w-[240px]"
      }`}
    >
      <div className="text-base-txt py-[10px] relative">
        <div
          className={`flex justify-center ${
            expandedSideBar && "absolute right-[10px] top-[10px]"
          }`}
        >
          {!expandedSideBar ? (
            <NavButton onClick={() => setExpandedSideBar(true)} sralt="Expand">
              <svg
                width="20px"
                height="20px"
                fill="currenTcolor"
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
          ) : (
            <NavButton
              onClick={() => setExpandedSideBar(false)}
              sralt="Collapse"
            >
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
          )}
        </div>

        {expandedSideBar && (
          <p className="font-inter font-semibold uppercase text-[13px] px-[10px] pt-[3px]">
            Followed Channels
          </p>
        )}
      </div>

      {!expandedSideBar && (
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

      <div>
        {data.map((channel, index) => (
          <Channel key={index} channel={channel} expanded={expandedSideBar} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
