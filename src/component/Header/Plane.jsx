import React from "react";

const Plane = () => {
  return (
    <div>
      <img src="/Plane.png" alt="Plane" className="plane"/>
      <img
        src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwY2xvdWRzfGVufDB8fDB8fHww"
        alt="Plane"
        className="sky"
      />
      <div className="knowMore"> 
        <h2>Know More</h2>
        <i class="ri-arrow-right-line ri-2x"></i>
      </div>
      
    </div>
  );
};

export default Plane;
