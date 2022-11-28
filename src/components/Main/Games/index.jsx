import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { games } from "../../../data";
import GameCard from "./GameCard";

export default function Games() {
  const { cols, style } = useResponsiveGrid([12, 10, 8, 6, 4], 2);

  return (
    <>
      <div className="grid gap-[10px] mt-[-1px]" style={style}>
        {games.slice(0, cols).map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </>
  );
}
