import moment from "moment";
export const Date = ({ label, name, path }) => {
  const date_format = moment(path).format("YYYY-MM-DD");
  return (
    <>
      <input
        type="date"
        id="date_format"
        label={label}
        defaultValue={date_format}
        name={name}
      />
      <label>{label}</label>
    </>
  );
};
