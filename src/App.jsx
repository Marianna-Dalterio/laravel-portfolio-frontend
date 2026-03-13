import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ProjectHomePage from "./pages/ProjectHomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rotta genitore che usa il Layout */}
          <Route element={<DefaultLayout />}>
            {/* Tutte le rotte qui dentro verranno caricate nell' <Outlet /> */}
            <Route path="/" element={<ProjectHomePage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
