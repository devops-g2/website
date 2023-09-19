import "./Container.css";
import { LeftGutter } from "../LeftGutter/LeftGutter";
import { RightGutter } from "../RightGutter/RightGutter";

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};
