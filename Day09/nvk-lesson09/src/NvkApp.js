import React from "react";
import NvkUseState from "./components/NvkUseState";
import NvkUseStateListObject from "./components/NvkUseStateListObject";
import NvkEffect1 from "./components/NvkEffect1";

const NvkApp = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hook</h1>
      <NvkUseState />
      <NvkUseStateListObject />
      <NvkEffect1 />
    </div>
  );
};

export default NvkApp;