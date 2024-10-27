import "./weather_App.css";

import { LeftSIde } from "../LeftSideScreen/LeftSIde";
import NavBar from "../NavBar/NavBar";
import RightSide from "../RightSideScreen/RightSide";

const Weather_App = () => {
  return (
    <>
      <div className="weatherApp">
        <NavBar />
        <div className="wrapper">
          <div className="leftSide">
            <LeftSIde />
          </div>
          <div className="rightSide">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather_App;
