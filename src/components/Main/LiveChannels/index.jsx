import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { followedChannels } from "../../../data";
import Channel from "./Channel";
import ShowMore from "../ShowMore";

export default function LiveChannels() {
  const [data, style] = useResponsiveGrid(followedChannels);

  return (
    <>
      <div className="grid gap-[10px]" style={style}>
        {data.map((channel, index) => (
          <Channel key={index} channel={channel} />
        ))}
      </div>
      <ShowMore />
    </>
  );
}
