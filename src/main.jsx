import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Display from "./components/Display/Display";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Halaman login */}
                <Route path="/" element={<Login />} />

                {/* Halaman dilindungi */}
                <Route
                    path="/display"
                    element={
                        <ProtectedRoute>
                            <Display />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);