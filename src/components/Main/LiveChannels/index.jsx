import { useState } from "react";
import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { followedChannels } from "../../../data";
import Channel from "./Channel";
import ShowMore from "../ShowMore";

export default function LiveChannels() {
  const [showMore, setShowMore] = useState(false);
  const [data, style] = useResponsiveGrid(followedChannels, showMore);

  return (
    <>
      <div className="grid gap-[20px_10px]" style={style}>
        {data.map((channel, index) => (
          <Channel key={index} channel={channel} />
        ))}
      </div>
      <ShowMore showMore={showMore} setShowMore={setShowMore} />
    </>
  );
}
