import "../main.css";
export const TextData = ({ label, name, path }) => {
  return (
    <>
      <input type="text" name={name} defaultValue={path} />
      <label>{label}</label>
    </>
  );
};
