import React from "react";

// DEPENDENCIES
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./provider/AppProvider";

// PAGES
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { CustomRoute } from "./components/molecules/CustomRoute";

// STYLE
import "./main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<CustomRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
