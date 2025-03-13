import React from "react";
import darkIcon from "@/assets/icons/dark_icon.png";
import Image from "next/image";
import BackgroundAnimated from "../animations/background";

function Header() {
  return (
    <header className="px-5 flex justify-between mt-5 mb-5">
      <div>mhyy.dev</div>
      <BackgroundAnimated />
    </header>
  );
}

export default Header;
