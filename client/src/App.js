import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Join, Chat } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
