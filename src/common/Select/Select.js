const Select = ({ options,changeHandler }) => {
  return (
    <select className="outline-none h-full" onChange={changeHandler}>
      {options.map((item) => (
        <option key={item.id} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
