function InputSample() {
  const [input, setInput] = userState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onReset = () => {
    setInput("");
  };
  return (
    <div>
      <input onChange={onChange} value={value} />
      <button onClick={onClick}>초기화</button>
      <div>
        <b>값:</b>
        어쩌고 저쩌고
      </div>
    </div>
  );
}
export default InputSample;
