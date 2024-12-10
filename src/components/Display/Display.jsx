import styles from "./Display.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";


const Display = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn"); // Hapus status login
        navigate("/"); // Arahkan kembali ke halaman login
    };
    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div>
                        <h1>LOG BOOK NERACA LIMBAH BAHAN BERBAHAYA DAN BERACUN (LB3)</h1>
                        <h2>PT LESTARI BERSAMA PERSADA</h2>
                    </div>
                    <button
                        className={styles.logoutButton}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Table Section */}
            <div className={styles.tableSection}>
                <table className={styles.logTable}>
                    <thead>
                        <tr>
                            <th colSpan="6">MASUKNYA LIMBAH B3 KE TEMPAT PENGUMPULAN</th>
                            <th colSpan="4">KELUARNYA LIMBAH B3 DARI TEMPAT PENGUMPULAN</th>
                            <th>SISA</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>Jenis Limbah B3 Masuk</th>
                            <th>Tanggal Masuk</th>
                            <th>Sumber Limbah B3</th>
                            <th>Jumlah LB3 Masuk</th>
                            <th>Maksimal Pengumpulan s/d Tanggal (t=0+90h)</th>
                            <th>Tanggal Keluar Limbah B3</th>
                            <th>Jumlah Limbah B3</th>
                            <th>Tujuan Penyerahan</th>
                            <th>Bukti No. Dokumen</th>
                            <th>Sisa Limbah B3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Icons Section */}
            <div className={styles.iconsSection}>
                <div className={styles.icon}>
                    <p>Mudah Meledak</p>
                </div>
                <div className={styles.icon}>
                    <p>Cairan Mudah Menyala</p>
                </div>
                <div className={styles.icon}>
                    <p>Padatan Mudah Menyala</p>
                </div>
                <div className={styles.icon}>
                    <p>Reaktif</p>
                </div>
                <div className={styles.icon}>
                    <p>Beracun</p>
                </div>
                <div className={styles.icon}>
                    <p>Korosif</p>
                </div>
                <div className={styles.icon}>
                    <p>Infeksius</p>
                </div>
                <div className={styles.icon}>
                    <p>Berbahaya Terhadap Lingkungan</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Display;