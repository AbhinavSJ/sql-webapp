import { Header } from "@/components";
import Sidebar from "@/components/Sidebar";
import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header headerText="SQL app" />
      <div className="flex flex-1">
        <Sidebar database="assd" />
        <div className="w-screen"> {children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
