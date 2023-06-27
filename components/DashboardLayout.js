"use client";

import SideBar from "./SideBar";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-[1fr,10fr]">
      <SideBar />
      <div className="max-w-full">{children}</div>
    </div>
  );
};

export default Dashboard;
