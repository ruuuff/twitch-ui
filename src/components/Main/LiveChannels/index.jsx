import { useState, useEffect } from "react";
import { followedChannels } from "../../../data";
import Channel from "./Channel";

export default function LiveChannels() {
  const [gridCols, setGridCol] = useState(0);
  const liveChannels = followedChannels.slice(0, gridCols);

  function onResize() {
    const width = window.innerWidth;

    setGridCol((current) => {
      if (width >= 1880) return 6;
      else if (width >= 1580) return 5;
      else if (width >= 1280) return 4;
      else if (width >= 980) return 3;
      else return 2;
    });
  }

  useEffect(onResize, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="grid gap-[10px]"
      style={{
        gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
      }}
    >
      {gridCols !== 0 &&
        liveChannels.map((channel, index) => (
          <Channel key={index} channel={channel} />
        ))}
    </div>
  );
}
