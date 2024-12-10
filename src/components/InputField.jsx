const InputField = ({ label, type, value, onChange, id }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor={id} style={{ fontSize: "1rem", color: "#333" }}>
                {label}
            </label>
            <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    style={{
        width: "100%",
        padding: "0.5rem", // Konsisten untuk semua input
        borderRadius: "4px", // Konsisten untuk semua input
        border: "1px solid #ccc",
        boxSizing: "border-box", // Pastikan padding tidak memengaruhi lebar total
        backgroundColor: "#fff", // Pastikan warna latar belakang netral
    }}
/>
        </div>
    );
};

export default InputField;