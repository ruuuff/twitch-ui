function CarouselBtn({ children, left, right, onClick = () => false }) {
  return (
    <div
      className={`absolute ${left && "left-0"} ${right && "right-0"} top-[50%] 
      transform translate-y-[-50%] rounded-md z-[8]`}
    >
      <button
        className="flex items-center justify-center w-[36px] h-[36px] rounded-md
        bg-carousel-btn-bg hover:bg-carousel-btn-bg-hover text-carousel-btn-arrow"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default CarouselBtn;
