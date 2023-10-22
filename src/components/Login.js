import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleRes = async (res) => {
    axios
      .post("http://localhost:8080/register")
      .then((res) => {
        if (res.status === 200) {
          navigate("/home");
        }
      })
      .then((error) => console.log(error));
  };
  return (
    <div className={styles.loginPage}>
      <img alt="" className={styles.background} src="" />
      <div className={styles.center}>
        <div className={styles.GoogleAuth}>
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => handleRes(credentialResponse)}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </GoogleOAuthProvider>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
