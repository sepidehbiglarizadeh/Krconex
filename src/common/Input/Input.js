const Input = ({ type = "text", label, name, formik }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label} :</label>
      <input
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        className="shadow-md w-full mb-2 p-2 rounded-md outline-none focus:ring focus:ring-primaryYellow"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-red">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
