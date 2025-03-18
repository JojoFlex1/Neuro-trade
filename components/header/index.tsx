import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const HeaderUI = () => {
  return (
    <nav className="flex justify-between items-center p-2 w-full">
      <SidebarTrigger />
      <div className="flex items-center">
        <div>
          {/* @ts-expect-error this ignores web component errors */}
          <appkit-button />
        </div>
      </div>
    </nav>
  );
};

export default HeaderUI;