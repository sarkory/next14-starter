import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./page.module.css";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
