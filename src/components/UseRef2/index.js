import { useEffect, useRef, useState } from "react";

function UseRef3() {
  const [input, setInput] = useState(' ');
  // cách lấy a input từ fe
  const inputRef = useRef();

  useEffect(() => {
    // tự động focus vào ô input
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
    inputRef.current.focus();
  };

  return (
    <>
    {/* ref={inputRef}: gán input cho thằng inputRef ở trên */}
      <input ref={inputRef} value={input ? input : " "} onChange={handleChange} />
    </>
  );
}

export default UseRef3;
