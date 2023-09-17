import "./LeftGutter.css";

export const LeftGutter = () => {
  return (
    <div className="left-gutter">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="sorting-options">
        <h3>Sort by</h3>
        <ul>
          <li>All</li>
          <li>Top</li>
          <li>New</li>
        </ul>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </div>
    </div>
  );
};
