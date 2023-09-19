import "./LeftGutter.css";
import { Logo } from "../../src/assets/Logo";
import { Link } from "react-router-dom";

export const LeftGutter = () => {
  return (
    <div className="left-gutter">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="sorting-options">
        <div className="sorting-title">
          <h3>Posts</h3>
        </div>
        <div className="sort-options">
          <ul>
            <li>All</li>
            <li>Top</li>
            <li>New</li>
          </ul>
        </div>
      </div>
      <div className="tags">
        <div className="tags-title">
          <h3>Tags</h3>
        </div>
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </div>
    </div>
  );
};
