import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Login from "./pages/auth/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar/index";
import Tasks from "./pages/tasks";
import ProtectedRoute from "./components/hoc/protected-route";

const store = configureStore();
function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, []);

  const location = useLocation();

  return (
    <Provider store={store}>
      <div className="app flex">
        {location.pathname !== "/login" && (
          <div className="w-1/6 bg-gray-700">
            <Sidebar />
          </div>
        )}
        <div className="w-full">
          {location.pathname !== "/login" && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute accessToken={accessToken}>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
