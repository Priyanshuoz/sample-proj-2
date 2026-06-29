import { Navigation } from "../Header/Navigation";
import Plane from "../Header/Plane";
import Info from "./Info";

const Header = () => {
  return (
    <div className="Header">
      <Navigation/>
      <Plane />
      <Info/>
    </div>
  );
};

export default Header;
