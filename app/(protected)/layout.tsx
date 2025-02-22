import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen bg-gray-200">
      <div className="w-[20%] md:w-[8%] lg:w-[20%] xl:w-[18%]">
        <Sidebar />
      </div>

      <div className="w-[80%] md:w-[92%] lg:w-[80%] xl:w-[82%] bg-[#F7F8FA] flex flex-col">
        <Navbar />

        <div className="w-full h-full p-2 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
