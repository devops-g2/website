import "../styles/index.css";
import { LeftGutter } from "../components/LeftGutter/LeftGutter";
import { RightGutter } from "../components/RightGutter/RightGutter";
export const LandingPage = () => {
  return (
    <>
      <div className="context">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <h2>Landing page content</h2>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  );
};
