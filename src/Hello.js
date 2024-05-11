import { memo } from "react";

function Hello({count}) {
  console.log("re-render");

  return <h1>Hello moi nguoi {count}</h1>;
}

// truyền memo vào đây để biến cái component thành component cấp cao
export default memo(Hello);
