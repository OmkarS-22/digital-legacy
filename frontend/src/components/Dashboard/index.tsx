import React, { useState } from "react";
import MainWindow from "./MainWindow";

function Dashboard() {
  const [activePage, setActivePage] = useState<string>("Home");

  return <MainWindow activePage={activePage} setActivePage={setActivePage} />;
}

export default React.memo(Dashboard);
