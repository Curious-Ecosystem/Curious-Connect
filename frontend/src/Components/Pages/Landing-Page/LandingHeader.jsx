import React from "react";

const Header = () => {
  return (
    <div className="w-full h-full text-cyan-50 text-2xl text-center">

  <main>
    <div class="container">
      <img src="meeting.png" alt=""/>
      <div class="hero-text">
     <h1>CONNECT</h1>
        <h1> COLLABORATE </h1>
        <h1>START <span>CONFERENCE</span></h1>
        <p>START YOUR NEXT VIDEO CALL WITH A SINGLE CLICK.
          NO DOWNLOAD, PLUG-IN, OR LOGIN IS REQUIRED.
          JUST GET STRAIGHT TO TALKING, MESSAGING, AND
          SHARING YOUR SCREEN.
        </p>
        <button>SIGN IN</button>
        <button>SIGN UP</button>
      </div>
    
    </div>
  </main>
<div class="meet"> <h1>Your Code Here</h1>
<input type="text" placeholder="Enter code"/>
<button>Join Now🔄</button>
</div>
    </div>
  );
};

export default Header;
