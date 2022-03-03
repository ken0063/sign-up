import "./Input.scss";

const Input = ({
  placeholder,
  type,
  errorMessage,
  onChange,
  name,
  value,
  ...restProps
}) => {
  return (
    <>
      <div
        className="input-wrapper"
        style={errorMessage && { border: "2px solid hsl(0, 100%, 74%)" }}
      >
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          {...restProps}
        />
        {errorMessage && (
          <img src="../../../images/icon-error.svg" alt="error-icon" />
        )}
      </div>
      {errorMessage && <span className="error">{errorMessage}</span>}
    </>
  );
};

export default Input;
