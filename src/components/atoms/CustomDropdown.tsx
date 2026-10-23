import React, { useState, useRef, useEffect } from "react";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Closed state */}
      <button
        type="button"
        className={`w-full flex items-center justify-between px-3 py-2 md:py-3 rounded-lg border border-line bg-white text-sm md:text-base text-left font-normal focus:outline-none focus:ring-2 focus:ring-teal-800/40 transition-all ${open ? 'ring-2 ring-teal-800/40' : ''}`}
        style={{ color: '#0B2A2E', fontWeight: 400 }}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? 'font-normal' : 'text-teal-950 font-normal'} style={{ fontWeight: 400 }}>
          {value || placeholder}
        </span>
        <svg className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-180' : ''} text-subtle`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown menu */}
      {open && (
        <div className="absolute z-30 mt-2 w-full bg-white rounded-xl shadow-lg border border-line py-2">
          <button
            type="button"
            className={`w-full text-left px-4 py-2 text-teal-950 text-sm md:text-base font-normal hover:bg-teal-50 transition-colors`}
            style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif' }}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            {placeholder}
          </button>
          {options.map((option) => (
            <button
              type="button"
              key={option}
              className={`w-full text-left px-4 py-2 text-teal-950 text-sm md:text-base font-normal hover:bg-teal-50 transition-colors`}
              style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown; 