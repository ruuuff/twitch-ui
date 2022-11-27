import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { categories } from "../../../data";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [data, style] = useResponsiveGrid(
    categories,
    false,
    [12, 10, 8, 6, 4],
    2
  );

  return (
    <>
      <div className="grid gap-[10px] mt-[-1px]" style={style}>
        {data.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </>
  );
}
