import styles from "./GitHubProfile.module.css";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
const GitHubProfile = () => {
  return (
    <div className={styles.GitHubProfile}>
      <ProfileSidebar />
      <ProfileContent />
    </div>
  );
};
export default GitHubProfile;
