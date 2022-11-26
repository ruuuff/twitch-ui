import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { categories } from "../../../data";

export default function Categories() {
  const [data, style] = useResponsiveGrid(categories, [12, 10, 8, 6, 4], 2);

  return (
    <>
      <div className="grid gap-[10px]" style={style}>
        {data.map(({ category }, index) => (
          <div key={index} className="bg-red-400">
            {category}
          </div>
        ))}
      </div>
    </>
  );
}
