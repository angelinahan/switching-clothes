import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemPage } from "./pages/ItemPage";
import { AboutPage } from "./pages/AboutPage";
import "./css/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reilly" element={<ItemPage name="reilly" />} />
        <Route path="/holly" element={<ItemPage name="holly" />} />
        <Route path="/aileen" element={<ItemPage name="aileen" />} />
        <Route path="/kyle" element={<ItemPage name="kyle" />} />
        <Route path="/ava" element={<ItemPage name="ava" />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
