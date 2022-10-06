function DropdownButton({ label, href = "/#", children }) {
  return (
    <a
      href={href}
      className="flex items-center p-[5px] rounded hover:bg-opac-01 active:bg-opac-015"
    >
      {children}
      <span className="text-[13px] font-inter font-normal pl-[5px] mt-[-1px]">
        {label}
      </span>
    </a>
  );
}

export default DropdownButton;
