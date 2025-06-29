import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* header */}

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
    </>
  );
};

export default MainLayout;
