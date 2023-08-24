import React from "react";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
