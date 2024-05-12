import { memo } from "react";

function Hello(props) {
  console.log("re-render");

  return (
    <>
      <h1>Hello moi nguoi </h1>

      <button onClick={props.onIncrease}>Click me</button>
    </>
  );
}

// truyền memo vào đây để biến cái component thành component cấp cao
export default memo(Hello);
