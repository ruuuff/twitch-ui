import Carousel from "./Carousel";
import LiveChannels from "./LiveChannels";

function MainContent() {
  return (
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px] pb-[70px]">
        <div className="flex items-center h-[340px] py-[20px]">
          <Carousel />
        </div>

        <div className="mt-[37px]">
          <div className="mb-2">
            <span className="text-base-text-color font-roobert font-semibold text-[18px]">
              <a href="/#" className="text-purple hover:underline">
                Live channels
              </a>{" "}
              we think you&#8217;ll like
            </span>
          </div>
          <LiveChannels />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
