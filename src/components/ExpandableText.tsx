import { useState } from "react";
interface Props {
  children: string;
  letterCount?: number;
}
const ExpandableText = ({ children, letterCount = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length > letterCount) {
  }
  return (
    <>
      <p>
        {children.length > letterCount && isExpanded
          ? children.substring(0, letterCount) + "..."
          : children}
      </p>
      {children.length > letterCount ? (
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "More" : "Show less"}
        </button>
      ) : null}
    </>
  );
};

export default ExpandableText;
