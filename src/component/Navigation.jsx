import logo from "../assets/Logo.png";

export const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logo">
        <img src={logo} alt="Image"></img>
        <h4>UiXSHUVO</h4>
      </div>
      <div className="info">
        <p>ABOUT</p>
        <p>TOUR</p>
        <p>PACAKAGE</p>
        <p>CONTACT</p>
      </div>
      <button>Book Trip</button>
    </div>
  );
};
