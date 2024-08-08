const Button = (params) => {
  let { value, type, HandleClick } = params;
  return (
    <button className={type} onClick={HandleClick}>
      {value}
    </button>
  );
};

export default Button;
