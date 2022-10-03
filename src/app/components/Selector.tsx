/** @jsxImportSource theme-ui */
export interface IOption<T1, T2> {
  key: T1;
  value: T2;
}

const Selector = (props: any) => {
  const options = props.options as Array<IOption<any, any>>;
  return (
    <select
      style={props.style}
      className={props.className}
      onChange={props.onChange}
      sx={{
        bg: "#1F1D2B",
        color: "#FFF",
        borderRadius: "8px",
        height: "40px",
        border: "1px solid #393C49",
        my: "auto",
      }}
    >
      {options.map((opt) => (
        <option key={opt.key} value={opt.value} >{opt.key}</option>
      ))}
    </select>
  );
};

export default Selector;
