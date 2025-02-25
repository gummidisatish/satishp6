import { useState } from "react";
import axios from "axios";
import styles from "./ProfileModal.module.css";

export default function ProfileModal({ onClose }) {
  const userId = localStorage.getItem("userId");
  const [profile, setProfile] = useState({
    userId: Number(userId),
    username: localStorage.getItem("username") || "",
    fullName: localStorage.getItem("fullName") || "",
    email: localStorage.getItem("email") || "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.username || !profile.fullName || !profile.email) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);
    setError("");
    
    try {
      localStorage.setItem("username", profile.username);
      localStorage.setItem("fullName", profile.fullName);
      localStorage.setItem("email", profile.email);
      
      await axios.put(`http://localhost:5000/api/users/${userId}`, profile);
      onClose();
    } catch (err) {
      console.error("Error updating profile:", err.response?.data || err.message);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>User Profile</h2>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <div className={styles.formFooter}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.saveButton} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}