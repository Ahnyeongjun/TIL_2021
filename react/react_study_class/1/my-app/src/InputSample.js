import React, { useState } from "react";

function InputSample() {
  const [inputs, setInput] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };
  const onChange2 = (e) => {
    setInput(e.target.value);
  };
  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>{name + "(" + nickname + ")"}</div>
    </div>
  );
}
export default InputSample;
