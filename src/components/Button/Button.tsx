import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: string;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  key?: string;
  onClick: () => void;
}
const Button = ({
  children,
  onClick,
  color = "primary",
  className = "btn btn-primary",
}: Props) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
