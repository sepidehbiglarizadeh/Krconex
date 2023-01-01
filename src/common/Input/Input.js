const Input = ({type="text",label,name}) => {
  return (
    <div>
      <label className="block mb-2">{label} :</label>
      <input
        type={type}
        name={name}
        className="shadow-md w-full mb-4 p-2 rounded-md outline-none focus:ring focus:ring-primaryYellow"
      />
    </div>
  );
};

export default Input;
