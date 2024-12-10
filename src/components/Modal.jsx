
const Modal = ({ message, onClose }) => {
    return (
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
                    width: "90%",
                    maxWidth: "400px",
                    padding: "2rem",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                }}
            >
                <h2 style={{ color: "#333", marginBottom: "1rem" }}>Error</h2>
                <p style={{ color: "#666", marginBottom: "1rem" }}>{message}</p>
                <button
                    onClick={onClose}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;