import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import ChatContextProvider from "./contexts/ChatContext";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <ChatContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ChatContextProvider>
      </AuthContextProvider>
    </>
  );
}
