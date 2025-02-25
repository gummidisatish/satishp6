import { Link, useNavigate } from "react-router-dom";
import styles from "./LHeader.module.css";

export default function LHeader({ setShowProfileModal, isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        src="/recipe-logo.jpg"
        alt="Recipe Book Logo"
        className={styles.logo}
        onClick={() => navigate("/home")}
      />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/home">Home</Link></li>
          {isAuthenticated && (
            <li className={styles.navItem}><Link to="/trending">Trending</Link></li>
          )}
          <li className={styles.navItem}><Link to="/saved">Saved</Link></li>
          <li className={styles.navItem}><Link to="/published">Published</Link></li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Recipes..."
            className={styles.searchInput}
            aria-label="Search Recipes"
          />
          <button className={styles.searchButton} aria-label="Search">
            <img src="/search.svg" alt="Search Icon" className={styles.searchIcon} />
          </button>
        </div>
        <button
          className={styles.profileButton}
          onClick={() => setShowProfileModal?.(true)}
          aria-label="Open Profile"
        >
          <img src="/profile_dp.jpg" alt="Profile" className={styles.profilePic} />
        </button>
      </div>
    </header>
  );
}
