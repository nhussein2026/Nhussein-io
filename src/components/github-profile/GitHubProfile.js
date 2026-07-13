import { Helmet } from "react-helmet-async";
import styles from "./GitHubProfile.module.css";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
const GitHubProfile = () => {
  return (
    <div className={styles.GitHubProfile}>
      <Helmet>
        <title>GitHub Profile — Nasser Hussein</title>
        <meta
          name="description"
          content="Nasser Hussein's GitHub activity — commits, contributions, and the tools and technologies he works with."
        />
      </Helmet>
      <ProfileSidebar />
      <ProfileContent />
    </div>
  );
};
export default GitHubProfile;
