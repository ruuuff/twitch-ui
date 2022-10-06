function NavButton({ sralt = "", children }) {
  return (
    <button
      className="flex justify-center items-center h-[30px] 
      w-[30px] rounded hover:bg-opac-01 active:bg-opac-015"
      title={sralt}
    >
      <span className="sr-only">{sralt}</span>
      {children}
    </button>
  );
}

export default NavButton;
