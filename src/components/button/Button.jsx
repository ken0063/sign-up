import "./Button.scss";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`button ${className == null ? "" : className}`}
    >
      {children}
    </button>
  );
};

export default Button;
