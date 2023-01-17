import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Slider from "./Components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex   ">
          <Sidebar />
        <div className="  ">
        </div>
        <div className="w-3/5 px-40 py-10 ">
          <Slider />
        </div>
      </div>{" "}
    </div>
  );
};

export default App;
