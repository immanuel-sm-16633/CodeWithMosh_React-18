import { AiFillHeart, AiOutlineHeart } from "react-icons/Ai";
import { useState } from "react";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return status ? (
    <AiFillHeart color="#ff6b81" size="20px" onClick={toggle} />
  ) : (
    <AiOutlineHeart size="20px" onClick={toggle} />
  );
};

export default Like;
