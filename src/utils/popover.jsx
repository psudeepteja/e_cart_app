// components/Popover.js
import { useState, useRef, useEffect } from "react";

export default function Popover({ trigger, children, position = "bottom-right" }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-right":
        return "top-full right-0 mt-2";
      case "bottom-left":
        return "top-full left-0 mt-2";
      case "top-right":
        return "bottom-full right-0 mb-2";
      case "top-left":
        return "bottom-full left-0 mb-2";
      default:
        return "top-full right-0 mt-2";
    }
  };

  return (
    <div className="relative" ref={popoverRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={`absolute z-20 bg-white shadow-xl rounded-lg p-4 min-w-[120px] ${getPositionClasses()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
