function Input({ text, setText, placeholder }) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
