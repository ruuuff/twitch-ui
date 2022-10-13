import Carousel from "./Carousel";

function MainContent() {
  return (
    <main
      className="w-full h-full scrollbar overflow-y-scroll mx-auto 
      max-w-[2000px]"
    >
      <div
        className="flex items-center h-[350px] px-[150px] py-[25px]
        bg-carousel-bg"
      >
        <Carousel />
      </div>
    </main>
  );
}

export default MainContent;
