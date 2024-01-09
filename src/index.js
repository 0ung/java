import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MiniBlog from "./MiniBlog";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 배포할때는 삭제하고 배포해야됨, 마운트를 두번 진행
  <MiniBlog />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line

reportWebVitals(console.log);
