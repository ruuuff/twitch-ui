import Carousel from "./Carousel";

function MainContent() {
  return (
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px]">
        <div className="flex items-center h-[340px] py-[20px]">
          <Carousel />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
