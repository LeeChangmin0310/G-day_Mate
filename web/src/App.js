import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./tabs/main.tsx";
import Upload from "./tabs/upload.tsx";
import Report from "./tabs/report.tsx";
import ScrollToTop from "./components/scrollToTop.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
