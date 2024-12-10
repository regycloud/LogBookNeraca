import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const [showModal, setShowModal] = useState(!isLoggedIn);

    if (!isLoggedIn) {
        return (
            <>
                {showModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#fff",
                                padding: "2rem",
                                borderRadius: "8px",
                                textAlign: "center",
                            }}
                        >
                            <p>Silakan login terlebih dahulu</p>
                            <button
                                onClick={() => setShowModal(false)}
                                style={{
                                    marginTop: "1rem",
                                    padding: "0.5rem 1rem",
                                    backgroundColor: "#007BFF",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
                <Navigate to="/" replace />
            </>
        );
    }

    return children;
};

export default ProtectedRoute;