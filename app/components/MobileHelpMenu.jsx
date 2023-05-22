'use client'

import Link from "next/link";
import React, { useState } from "react";

const MobileHelpMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Help</button>
      {isOpen && (
        <div>
          <Link href="help">Help</Link>
        </div>
      )}
    </div>
  );
};

export default MobileHelpMenu;
