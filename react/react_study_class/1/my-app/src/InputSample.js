import React, { useState, useRef } from "react";

function InputSample() {
  const nameInput = useRef();
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
  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
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
