import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import SignImg from "./SignImg.png";
import { auth } from "../Auth/firebase.jsx";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import i18n from "../components/common/components/LangConfig.jsx";
import { Spacer } from "../common/common.jsx";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Update message state on successful login
      setMessage("Login successful!");
      setError("");
      setOpen(true);
      setTimeout(() => {
        window.location.href = "/account";
      }, 2000);
      // Clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login errors
      setError(error.message);
      setOpen(true);
    }
  };

  const handleForgotPassword = async () => {
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
      setOpen(true);
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="relative flex justify-center   items-center mb-36 gap-12 lg:mt-28 xl:gap-24 ">
      {/* <img src={SignImg} alt="Sign Image" /> */}
      <div className="flex flex-col  md:mx-10 items-center sm:items-start max-lg:mt-40 justify-center">
        <h1 className="text-xl md:text-4xl font-medium font-inter ">
          Login To MediQuick
        </h1>
        <Spacer padding={6} />
        <form className="flex flex-col  w-72 md:w-96" onSubmit={handleLogIn}>
          <TextField
            label={i18n.t("Email")}
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Spacer padding={3} />
          <TextField
            type="password"
            label={i18n.t("Password")}
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Spacer padding={2} />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-xs md:text-sm lg:text-base text-red-500 hover:underline font-medium"
            >
              {i18n.t("loginPage.forgot")}
            </button>
          </div>
        </form>

        <Spacer padding={8} />
        <div className="w-72 md:w-96">
          <Button
            type="submit"
            sx={{
              color: "white",
              fontSize: "16px",
              textTransform: "none",
              // padding: "16px 0",
              borderRadius: "4px",
              fontWeight: "500",
              width: "100%",
              bgcolor: "hsla(0, 68%, 56%, 1)",
              ":hover": {
                bgcolor: "hsla(0, 68%, 56%, .9)",
              },
            }}
            variant="contained"
            color="primary"
            className="py-4 sm:py-6 md:py-8 lg:py-16"
          >
            {i18n.t("loginPage.login")}
          </Button>
        </div>
        <Spacer padding={3} />
        <div className="w-72 md:w-96">
          <Button
            onClick={null}
            className="flex items-center justify-center gap-4 py-4 sm:py-6 md:py-8 lg:py-16"
            sx={{
              color: "black",
              fontSize: "16px",
              bgcolor: "white",
              textTransform: "none",
              // padding: "px 0",
              borderRadius: "4px",
              fontWeight: "500",
              width: "100%",
              border: "1px solid hsla(0, 0%, 0%, 0.4)",
              ":hover": {
                bgcolor: "hsla(0, 0%, 0%, 1)",
                color: "white",
                fontWeight: "500",
              },
            }}
          >
            {/* Google Icon SVG */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1920_3336)">
                <path
                  d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_1920_3336">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Sign in with Google</span>
          </Button>
        </div>

        <Spacer padding={3} />
        <p className="text-gray-600 mx-auto text-[10px] sm:text-xs md:text-sm">
          <span>{i18n.t("loginPage.notHaveAccount")} </span>
        </p>
        <Link
          to="/signUp"
          className="text-[10px] sm:text-xs md:text-sm mx-auto text-gray font-medium hover:underline"
        >
          {i18n.t("signUpPage.title")}
        </Link>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error ? error : message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LogIn;
