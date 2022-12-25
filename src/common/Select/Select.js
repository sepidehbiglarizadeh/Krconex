const Select = ({ options }) => {
  return (
    <select className="outline-none h-full">
      {options.map((item) => (
        <option key={item.id} value={item.value} disabled={item.disabled}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
