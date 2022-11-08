import Carousel from "./Carousel";

function MainContent() {
  return (
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px]">
        <div className="flex items-center h-[340px] py-[20px]">
          <Carousel />
        </div>
        <div className="mt-[37px]">
          <div className="text-base-text-color font-roobert font-semibold text-[18px]">
            Live channels we think you&#8217;ll like
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
