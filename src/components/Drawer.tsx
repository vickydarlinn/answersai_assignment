import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed z-50 left-0 top-0 w-screen h-screen backdrop-blur-sm bg-black bg-opacity-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`p-5 pt-10 bg-sidebar w-screen sm:w-4/5 lg:w-1/2 h-screen ml-auto overflow-auto transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
