import React from "react";
import { Outlet } from "react-router-dom";

function ProfileOutlet() {
    return <section>
      <Outlet/>
  </section>;
}

export default ProfileOutlet;
