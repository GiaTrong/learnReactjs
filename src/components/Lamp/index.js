import { useState } from "react";
function Lamp() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <button onClick={handleClick}>Bật/tắt</button>
      <div>{status ? "Bật" : "Tắt"}</div>
    </>
  );
}

export default Lamp;
